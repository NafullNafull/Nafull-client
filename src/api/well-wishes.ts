import { AxiosResponse } from 'axios';
import client from './client';

// WellWish model
export interface WellWish {
  wellWishId: string;
  senderId: string;
  receiverDiscordId: string;
  nickname: string;
  content: string;
  locked: boolean;
}

// send well wish
export interface SendRequestBody {
  receiverDiscordId: string;
  nickname: string;
  content: string;
}

export const send = async (body: SendRequestBody): Promise<void> => {
  const response = await client.post<void, AxiosResponse<void>, SendRequestBody>('/well-wishes/send', body);
  return response.data;
};

// receive well wish
export interface ReceiveRequestBody {
  discordId: string;
}
export const receive = async (body: ReceiveRequestBody): Promise<void> => {
  const response = await client.post<void, AxiosResponse<void>, ReceiveRequestBody>('/well-wishes/receive', body);
  return response.data;
};

// unlock well wish
export const unlock = async (wellWishId: string): Promise<void> => {
  const response = await client.patch<void, AxiosResponse<void>>(`/well-wishes/${wellWishId}/unlock`);
  return response.data;
};

// get well wish
export const get = async (wellWishId: string): Promise<WellWish> => {
  const response = await client.get<WellWish>(`/well-wishes/${wellWishId}`);
  return response.data;
};
