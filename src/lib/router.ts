import { useEffect, useState } from 'react';

export const ROUTES = [
  '/',
  '/programme',
  '/univers',
  '/approche',
  '/about',
  '/team',
  '/tour',
  '/gallery',
  '/contact',
] as const;
export type Route = (typeof ROUTES)[number];

function currentRoute(): Route {
  const path = window.location.hash.replace(/^#/, '') || '/';
  return (ROUTES as readonly string[]).includes(path) ? (path as Route) : '/';
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(currentRoute);

  useEffect(() => {
    const onChange = () => {
      setRoute(currentRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export function routeHref(route: Route): string {
  return `#${route}`;
}
