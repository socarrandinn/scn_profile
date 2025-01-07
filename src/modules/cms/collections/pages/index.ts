import { lazy } from 'react';

const loadCollectionsList = () => import('modules/cms/collections/pages/CollectionsList');
export const CollectionsList = lazy(loadCollectionsList);
