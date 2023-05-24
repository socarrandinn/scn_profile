import { lazy } from 'react';

const loadTeamList = () => import('modules/rrhh/team/pages/TeamList');
export const TeamList = lazy(loadTeamList);

const loadTeamDetails = () => import('modules/rrhh/team/pages/TeamDetails');
export const TeamDetails = lazy(loadTeamDetails);
