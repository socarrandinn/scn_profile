import { lazy } from 'react';

const loadPageList = () => import('modules/cms/page/pages/PageList');
export const PageList = lazy(loadPageList);
