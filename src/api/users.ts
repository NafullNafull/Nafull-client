import { AxiosResponse } from 'axios';
import { Letter } from './letters';
import client from './client';

// User model
export interface UserData {
  userId: string;
  discordId: string;
  nickname: string;
  receivedLetters: Letter[];
  sentLetters: Letter[];
  totalSpreadCount: number;
  wingCount: number;
  registrationStamp: number;
  registrationOrder: number;
}

// register
export interface RegisterRequestBody {
  letterId: string;
  rawPassword: string;
  personalInformationAgreement: boolean;
  nickname: string;
}

export const register = async (body: RegisterRequestBody): Promise<UserData> => {
  const response = await client.post<UserData, AxiosResponse<UserData>, RegisterRequestBody>('/users/register', body);
  return response.data;
};

// login
export interface LoginRequestBody {
  discordId: string;
  rawPassword: string;
}
export const login = async (body: LoginRequestBody): Promise<UserData> => {
  const response = await client.post<UserData, AxiosResponse<UserData>, LoginRequestBody>('/users/login', body);
  return response.data;
};

// get user data
export const get = async (discordId: string): Promise<UserData> => {
  const response = await client.get<UserData>(`/users/discord-id/${discordId}`);
  return response.data;
};

// get all discord users
export interface GetAllResposneData {
  data: string[];
}
export const getAll = async (): Promise<GetAllResposneData> => {
  const response = await client.get<GetAllResposneData>('/users/all/discord-ids');
  return response.data;
};
