import { lazy } from 'react';

const loadFormsDemos = () => import('./FormsPage');
export const FormsDemos = lazy(loadFormsDemos);
