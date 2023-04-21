import { lazy } from 'react';

const loadButtonDemos = () => import('./ButtonPage');
export const ButtonDemos = lazy(loadButtonDemos);
