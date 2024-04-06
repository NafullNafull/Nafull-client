import { useCallback, useEffect, useState } from 'react';
import { CookieValue, getCookie, removeCookie, setCookie } from './cookie';

export default function useUser() {
  const [user, setUser] = useState<CookieValue['user'] | null>(null);

  useEffect(() => {
    const storedUser = getCookie('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const setUserCookie = useCallback((user: CookieValue['user']) => {
    setUser(user);
    setCookie('user', user);
  }, []);

  const resetUser = useCallback(() => {
    removeCookie('user');
    setUser(null);
  }, []);

  return { user, setUserCookie, resetUser };
}
