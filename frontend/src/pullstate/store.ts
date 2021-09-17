import { Store } from 'pullstate';
import { fromPairs, isEmpty } from 'lodash/fp';

import { OldState, initPersistency } from './persistency';
import { MainState, SortBy, initialState } from './initialState';

export const MainStore = new Store(initialState);

const defaultReconcile = (iState: MainState, oldState: OldState) => {
  return fromPairs(
    Object.entries(iState).map(([key, value]) => [key, oldState[key] || value]),
  ) as MainState;
};

const reconcileState = (iState: MainState, oldState: OldState): MainState => {
  if (!isEmpty(oldState) && oldState.version !== initialState.version) {
    // do the reconcile differently depending on oldState.version
  }

  return defaultReconcile(iState, oldState);
};

export function initMainStore() {
  const { restoreStoredData, subscribe } = initPersistency({
    storeName: 'MainStore',
    store: MainStore,
    initialState: initialState,
  });

  restoreStoredData(reconcileState);

  updateUserAction((s) => ({ ...s, initialized: true }));

  return subscribe();
}

/////////////////////////////////
// ACTIONS
/////////////////////////////////

// This function is useful to force typechecking for updates
// otherwise you can write anything to store without TS complaining
export function updateUserAction(cb: (oldState: MainState) => MainState) {
  MainStore.update(cb);
}

export const updateSort = (sort: SortBy | null) => {
  updateUserAction((state) => ({
    ...state,
    sort,
  }));
};
