import { lazy } from 'react';

const loadFormTextFieldWithOptions = () => import('./FormTextFieldWithOptions');
export const FormTextFieldWithOptions = lazy(loadFormTextFieldWithOptions);
