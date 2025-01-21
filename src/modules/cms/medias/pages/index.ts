import { lazy } from 'react';

const loadMediaPage = () => import('modules/cms/medias/pages/MediaPage');
export const MediaPage = lazy(loadMediaPage);
