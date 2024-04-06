import cookie from 'js-cookie';
export const cookieKeys = {
  user: 'user',
} as const;

export interface CookieValue extends Record<CookieKey, object> {
  user: {
    userId: string;
    discordId: string;
    nickName: string;
  };
}

export type CookieKey = (typeof cookieKeys)[keyof typeof cookieKeys];
export function setCookie<T extends CookieKey>(key: T, value: CookieValue[T]) {
  cookie.set(key, JSON.stringify(value));
}

export function getCookie<T extends CookieKey>(key: T): CookieValue[T] | null {
  const value = cookie.get(key);
  if (!value) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch {
    cookie.remove(key);
    return null;
  }
}

export function removeCookie<T extends CookieKey>(key: T) {
  cookie.remove(key);
}
