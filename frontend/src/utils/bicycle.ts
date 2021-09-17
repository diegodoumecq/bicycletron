import { sortBy } from 'lodash/fp';
import { Bicycle } from 'api/bicycles';
import { SortBy } from 'pullstate/initialState';

export function getFieldName(sort: SortBy): keyof Bicycle {
  switch (sort) {
    case SortBy.BRAND:
      return 'brand';
    case SortBy.MODEL:
      return 'model';
    case SortBy.PRICE:
      return 'price';
    case SortBy.TYPE:
      return 'type';
    case SortBy.YEAR:
      return 'fab_year';
  }
}

export function sortBicycles(bicycles: Bicycle[] | undefined, sort: SortBy | null) {
  if (sort === null) {
    return bicycles || [];
  }
  return sortBy(getFieldName(sort), bicycles);
}
