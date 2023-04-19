import { lazy } from 'react';

const loadUserDetails = () => import('modules/account/pages/UserDetails');
export const UserDetails = lazy(loadUserDetails);
