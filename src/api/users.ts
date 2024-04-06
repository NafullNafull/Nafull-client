import { AxiosResponse } from 'axios';
import { WellWish } from './well-wishes';
import client from './client';

// User model
export interface UserData {
  userId: string;
  discordId: string;
  receivedLetters: WellWish[];
  sentLetters: WellWish[];
  totalSpreadCount: number;
  keyCount: number;
}

// register
export interface RegisterRequestBody {
  wellWishId: string;
  rawPassword: string;
  personalInformationAgreement: boolean;
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
