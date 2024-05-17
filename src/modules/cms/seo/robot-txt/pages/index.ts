import { lazy } from 'react';

const loadRobotTxt = () => import('modules/cms/seo/robot-txt/pages/RobotTxt');
export const RobotTxt = lazy(loadRobotTxt);
