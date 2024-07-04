import { lazy } from 'react';

const loadTagsList = () => import('modules/inventory/settings/tags/pages/TagsList');
export const TagsList = lazy(loadTagsList);
