import { AxiosResponse } from 'axios';
import client from './client';
import { BadgeType } from '../assets/badges';

// Letter model
export interface Letter {
  letterId: string;
  senderId: string;
  receiverDiscordId: string;
  content: string;
  locked: boolean;
  createdAt: string;
  nickname: string;
  badge: BadgeType;
}

// send letter
export interface SendRequestBody {
  senderId: string;
  receiverDiscordId: string;
  senderNickname: string;
  content: string;
  badge: BadgeType;
}

export const send = async (body: SendRequestBody[]): Promise<void> => {
  const response = await client.post<void, AxiosResponse<void>, { data: SendRequestBody[] }>('/letters/send', {
    data: body,
  });
  return response.data;
};

// send random letter
export interface SendRandomRequestBody {
  senderId: string;
  senderNickname: string;
  content: string;
  badge: BadgeType;
}

export const sendRandom = async (body: SendRandomRequestBody[]) => {
  const response = await client.post<void, AxiosResponse<void>, { data: SendRandomRequestBody[] }>(
    '/letters/send/random',
    { data: body }
  );
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
export const unlock = async (letterId: string, userId: string): Promise<void> => {
  const response = await client.patch<void, AxiosResponse<void>>(`/letters/${letterId}/unlock`, { userId });
  return response.data;
};

// get letter
export const get = async (letterId: string): Promise<Letter> => {
  const response = await client.get<Letter>(`/letters/${letterId}`);
  return response.data;
};
