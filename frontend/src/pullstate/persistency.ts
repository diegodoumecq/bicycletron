import { Store } from 'pullstate';

// let's watch ALL changes
const watchFilter = <S>(a: S) => a;

export type OldState = Record<string, unknown>;
export type ReconcileFn<T> = (initialState: T, oldState: OldState) => T;

export function initPersistency<S = { version: string }>({
  storeName,
  store,
  initialState,
}: {
  storeName: string;
  store: Store<S>;
  initialState: S & { version: string };
}) {
  return {
    restoreStoredData: (reconcileFn: ReconcileFn<S>) => {
      const localStorageValue = localStorage.getItem(storeName);
      const oldState = JSON.parse(localStorageValue != null ? localStorageValue : '{}') as Record<
        string,
        unknown
      >;

      const reconciledState = {
        ...reconcileFn(initialState, oldState),
        version: initialState.version,
      } as S;

      store.update(() => reconciledState);

      localStorage.setItem(storeName, JSON.stringify(reconciledState));

      return reconciledState;
    },
    subscribe: () => {
      return store.subscribe(watchFilter, (keepLocal) => {
        void localStorage.setItem(storeName, JSON.stringify(keepLocal));
      });
    },
  };
}
