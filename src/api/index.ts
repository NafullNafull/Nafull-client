import client from './client';

export const signin = (data: any) => {
  return client.post('/signin', data);
};

export default {
  signin,
};
