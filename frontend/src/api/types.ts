import { AxiosError } from 'axios';

export type ApiError = AxiosError<{ message: string; error: string; statusCode: number }>;

export enum BicycleType {
  MOUNTAIN = 'MOUNTAIN',
  CROSS = 'CROSS',
  ROAD = 'ROAD',
  TOURING = 'TOURING',
  FOLDING = 'FOLDING',
  FIXED_GEAR = 'FIXED_GEAR',
  BMX = 'BMX',
  RECUMBENT = 'RECUMBENT',
  CRUISER = 'CRUISER',
  ELECTRIC = 'ELECTRIC',
}
