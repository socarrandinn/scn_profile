import { lazy } from 'react';

const loadCrmSettingMenu = () => import('./CrmSettingMenu');
export const CrmSettingMenu = lazy(loadCrmSettingMenu);
