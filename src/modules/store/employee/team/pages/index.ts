import { lazy } from 'react';

const loadTeamList = () => import('modules/store/employee/team/pages/TeamList');
export const TeamList = lazy(loadTeamList);

const loadTeamDetails = () => import('modules/store/employee/team/pages/TeamDetails');
export const TeamDetails = lazy(loadTeamDetails);
