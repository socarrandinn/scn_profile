import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { RobotTxtService } from 'modules/cms/seo/robot-txt/services';
import { ROBOT_TXTS_LIST_KEY } from 'modules/cms/seo/robot-txt/constants';

export const useFindRobotTxts = () => {
  const { fetch, queryKey } = useTableRequest(RobotTxtService.search);

  return useQuery([ROBOT_TXTS_LIST_KEY, queryKey], fetch);
};
