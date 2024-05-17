import { useQuery } from '@tanstack/react-query';
import { RobotTxtService } from 'modules/cms/seo/robot-txt/services';
import { useCallback } from 'react';
import { IRobotTxt } from 'modules/cms/seo/robot-txt/interfaces';
import { ROBOT_TXT_CURRENT_KEY } from '../constants';

export const useFindRobotTxt = () => {
  const fetch = useCallback(() => RobotTxtService.getRobotTxt(), []);
  return useQuery<IRobotTxt>([ROBOT_TXT_CURRENT_KEY], fetch);
};
