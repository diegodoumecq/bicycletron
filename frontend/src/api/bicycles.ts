import axios from 'axios';
import { useQuery } from 'react-query';
import config from 'config';
import sleep from 'utils/sleep';

import { bicycles } from './bicyclesMock';
import { ApiError, BicycleType } from './types';

export interface Bicycle {
  sku: string;
  brand: number;
  image: string;
  type: BicycleType;
  model: string;
  fab_year: number;
  price: string;
}

export const getBicyclesApi = (brandId?: number) => {
  return axios.get<Bicycle[]>('/api/bicycles', { params: { brand_id: brandId } }).then(({ data }) => data);
};

export const getBicyclesMockedApi = async (brandId?: number) => {
  await sleep(1000);

  return brandId === undefined ? bicycles : bicycles.filter((b) => b.brand === brandId);
};

export const useBicycles = (brandId?: number, enabled = true) => {
  const {
    data: bicycles,
    isLoading: bicyclesLoading,
    error: bicyclesError,
    ...rest
  } = useQuery<Bicycle[], ApiError>(
    ['getBicyclesApi', brandId],
    () => (config.USE_MOCKS ? getBicyclesMockedApi(brandId) : getBicyclesApi(brandId)),
    {
      enabled,
    },
  );

  return { bicycles, bicyclesLoading, bicyclesError, ...rest };
};
