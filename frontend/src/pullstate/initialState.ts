export enum SortBy {
  BRAND = 'BRAND',
  PRICE = 'PRICE',
  TYPE = 'TYPE',
  MODEL = 'MODEL',
  YEAR = 'YEAR',
}

export interface MainState {
  version: string;
  initialized: boolean;

  sort: SortBy | null;
}

export const initialState: MainState = {
  version: '1.0',
  initialized: false,

  // For the sake of showing how pullstate works, let's say that we need to store the sorting order
  // in localStorage and use it in all the bike listing screens (all two of them)
  sort: null,
};
