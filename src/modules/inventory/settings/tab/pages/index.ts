import { lazy } from 'react';

const loadTabList = () => import('modules/inventory/settings/tab/pages/TabList');
export const TabList = lazy(loadTabList);
