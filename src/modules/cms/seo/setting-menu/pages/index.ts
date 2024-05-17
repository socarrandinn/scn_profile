import { lazy } from 'react';

const loadSeoSettingMenu = () => import('./SeoSettingMenu');
export const SeoSettingMenu = lazy(loadSeoSettingMenu);
