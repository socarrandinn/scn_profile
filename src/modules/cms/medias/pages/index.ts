import { lazy } from 'react';

const loadMediaPage = () => import('modules/cms/medias/pages/MediaPage');
export const MediaPage = lazy(loadMediaPage);

const loadMediaStorePage = () => import('modules/cms/medias/pages/MediaStorePage');
export const MediaStorePage = lazy(loadMediaStorePage);
