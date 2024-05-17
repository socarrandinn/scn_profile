import { useQuery } from '@tanstack/react-query';
import { RobotTxtService } from 'modules/cms/seo/robot-txt/services';
import { ROBOT_TXTS_ONE_KEY } from 'modules/cms/seo/robot-txt/constants';
import { useCallback } from 'react';
import { IRobotTxt } from 'modules/cms/seo/robot-txt/interfaces';

export const useFindOneRobotTxt = (id: string | null) => {
  const fetch = useCallback(() => RobotTxtService.getOne(id as string), [id]);
  return useQuery<IRobotTxt>([id, ROBOT_TXTS_ONE_KEY], fetch, { enabled: !!id });
};
