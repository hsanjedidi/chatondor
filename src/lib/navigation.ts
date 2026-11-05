import type { TranslationKey } from '@/i18n/translations';
import type { Route } from '@/lib/router';

export const NAV_LABELS: Record<Route, TranslationKey> = {
  '/': 'nav.home',
  '/programme': 'nav.programme',
  '/univers': 'nav.universe',
  '/approche': 'nav.approach',
  '/about': 'nav.about',
  '/team': 'nav.team',
  '/tour': 'nav.tour',
  '/gallery': 'nav.gallery',
  '/contact': 'nav.contact',
};
