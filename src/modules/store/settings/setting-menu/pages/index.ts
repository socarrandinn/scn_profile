import { lazy } from 'react';

const loadStoreSettingMenu = () => import('./StoreSettingMenu');
export const StoreSettingMenuPage = lazy(loadStoreSettingMenu);
