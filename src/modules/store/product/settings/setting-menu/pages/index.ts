import { lazy } from 'react';

const loadRRHHSettingMenu = () => import('./RRHHSettingMenu');
export const RRHHSettingMenuPage = lazy(loadRRHHSettingMenu);
