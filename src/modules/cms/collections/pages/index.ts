import { lazy } from 'react';

const loadCollectionsList = () => import('modules/cms/collections/pages/CollectionsList');
export const CollectionsList = lazy(loadCollectionsList);

/* collection switch */
const loadCollectionContentTypePage = () => import('modules/cms/collections/pages/CollectionContentTypePage');
export const CollectionContentTypePage = lazy(loadCollectionContentTypePage);
