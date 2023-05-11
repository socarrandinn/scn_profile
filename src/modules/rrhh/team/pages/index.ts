import { lazy } from 'react';

const loadTeamList = () => import('modules/rrhh/team/pages/TeamList');
export const TeamList = lazy(loadTeamList);
