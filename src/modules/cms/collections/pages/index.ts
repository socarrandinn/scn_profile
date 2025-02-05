import { lazy } from 'react';

const loadCollectionTabListPage = () => import('modules/cms/collections/pages/CollectionTabListPage');
export const CollectionTabListPage = lazy(loadCollectionTabListPage);

const loadCollectionsList = () => import('modules/cms/collections/pages/CollectionsList');
export const CollectionsList = lazy(loadCollectionsList);

/* collection switch */
const loadCollectionContentTypePage = () => import('modules/cms/collections/pages/CollectionContentTypePage');
export const CollectionContentTypePage = lazy(loadCollectionContentTypePage);

const loadCollectionElementListPage = () => import('modules/cms/collections/pages/CollectionElementListPage');
export const CollectionElementListPage = lazy(loadCollectionElementListPage);
