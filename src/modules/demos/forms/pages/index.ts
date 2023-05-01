import { lazy } from 'react';

const loadInputsDemos = () => import('./InputsPage');
export const InputsPage = lazy(loadInputsDemos);

const loadFormsDemos = () => import('./FormsPage');
export const FormsPage = lazy(loadFormsDemos);
