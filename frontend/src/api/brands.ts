import axios from 'axios';
import { useQuery } from 'react-query';
import config from 'config';
import sleep from 'utils/sleep';

import { brands } from './brandsMock';
import { ApiError } from './types';

export interface Brand {
  id: number;
  name: string;
  icon: string;
}

export const getBrandsApi = () => {
  return axios.get<Brand[]>(`/api/brands`).then((response) => response.data);
};

export const getBrandsMockedApi = async () => {
  await sleep(1000);

  return brands;
};

const twelveHours = 1000 * 60 * 60 * 12;

export const useBrands = () => {
  const {
    data: brands,
    isLoading: brandsLoading,
    error: brandsError,
    ...rest
  } = useQuery<Brand[], ApiError>(['getBrandsApi'], config.USE_MOCKS ? getBrandsMockedApi : getBrandsApi, {
    staleTime: twelveHours,
  });
  return { brands, brandsLoading, brandsError, ...rest };
};
