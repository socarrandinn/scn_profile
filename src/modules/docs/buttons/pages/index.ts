import { lazy } from 'react';

const loadButtonDocs = () => import('./Button');
export const ButtonDocs = lazy(loadButtonDocs);
