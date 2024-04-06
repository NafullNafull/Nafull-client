import client from './client';

export interface Statistics {
  totalUserCount: number;
  totalButterflyEffectCount: number;
}

export const get = async (): Promise<Statistics> => {
  const response = await client.get<Statistics>('/statistics');
  return response.data;
};
