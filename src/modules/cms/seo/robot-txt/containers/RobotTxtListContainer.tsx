import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindRobotTxts } from 'modules/cms/seo/robot-txt/hooks/useFindRobotTxts';
import { robotTxtColumns } from 'modules/cms/seo/robot-txt/constants/robot-txt.columns';
import { RobotTxtListToolbar } from 'modules/cms/seo/robot-txt/components/RobotTxtListToolbar';
import RobotTxtEditModal from 'modules/cms/seo/robot-txt/containers/RobotTxtEditModal';

const RobotTxtListContainer = () => {
  const { isLoading, error, data } = useFindRobotTxts();
  return (
    <Box>
      <RobotTxtListToolbar />
      <Table
        columns={robotTxtColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <RobotTxtEditModal />
    </Box>
  );
};

export default memo(RobotTxtListContainer);
