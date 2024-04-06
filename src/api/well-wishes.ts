import { AxiosResponse } from 'axios';
import client from './client';

// WellWish model
export interface WellWish {
  letterId: string;
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
  const response = await client.post<void, AxiosResponse<void>, SendRequestBody>('/letters/send', body);
  return response.data;
};

// receive well wish
export interface ReceiveRequestBody {
  discordId: string;
}
export const receive = async (body: ReceiveRequestBody): Promise<void> => {
  const response = await client.post<void, AxiosResponse<void>, ReceiveRequestBody>('/letters/receive', body);
  return response.data;
};

// unlock well wish
export const unlock = async (letterId: string): Promise<void> => {
  const response = await client.patch<void, AxiosResponse<void>>(`/letters/${letterId}/unlock`);
  return response.data;
};

// get well wish
export const get = async (letterId: string): Promise<WellWish> => {
  const response = await client.get<WellWish>(`/letters/${letterId}`);
  return response.data;
};
