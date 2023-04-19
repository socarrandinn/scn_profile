import { lazy } from 'react';

const loadFlexBoxDemos = () => import('./FlexBoxPage');
export const FlexBoxDemos = lazy(loadFlexBoxDemos);
