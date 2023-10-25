import { useCallback, useEffect, useMemo, useState } from 'react';
import Cookies from 'universal-cookie';

export function useCookie(cookieName: string): {
  isCookieStored: () => boolean;
  cookieStored: boolean;
  removeCookie: () => void;
  setCookie: () => void;
} {
  const cookies = useMemo(() => new Cookies(), []);
  const [cookieStored, setCookieStored] = useState(false);

  useEffect(() => {
    setCookieStored(cookies.get(cookieName) === cookieName);
  }, [cookieName, setCookieStored, cookies]);

  const isCookieStored = useCallback(
    () => cookies.get(cookieName) === cookieName,
    [cookieName, cookies]
  );

  const removeCookie = () => {
    cookies.remove(cookieName, { path: '/' });
  };

  const setCookie = () => {
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    cookies.set(cookieName, cookieName, {
      path: '/',
      expires: oneYearFromNow
    });
    setCookieStored(true);
  };

  return { isCookieStored, removeCookie, setCookie, cookieStored };
}
