import { AxiosResponse } from 'axios';
import client from './client';

// Letter model
export interface Letter {
  letterId: string;
  senderId: string;
  receiverDiscordId: string;
  senderNickname: string;
  content: string;
  locked: boolean;
}

// send letter
export interface SendRequestBody {
  receiverDiscordId: string;
  senderNickname: string;
  content: string;
}

export const send = async (body: SendRequestBody): Promise<void> => {
  const response = await client.post<void, AxiosResponse<void>, SendRequestBody>('/letters/send', body);
  return response.data;
};

// receive letter
export interface ReceiveRequestBody {
  discordId: string;
}
export const receive = async (body: ReceiveRequestBody): Promise<void> => {
  const response = await client.post<void, AxiosResponse<void>, ReceiveRequestBody>('/letters/receive', body);
  return response.data;
};

// unlock letter
export const unlock = async (letterId: string): Promise<void> => {
  const response = await client.patch<void, AxiosResponse<void>>(`/letters/${letterId}/unlock`);
  return response.data;
};

// get letter
export const get = async (letterId: string): Promise<Letter> => {
  const response = await client.get<Letter>(`/letters/${letterId}`);
  return response.data;
};
