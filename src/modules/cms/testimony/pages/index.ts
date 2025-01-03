import { lazy } from 'react';

const loadTestimonyList = () => import('modules/cms/testimony/pages/TestimonyList');
export const TestimonyList = lazy(loadTestimonyList);
