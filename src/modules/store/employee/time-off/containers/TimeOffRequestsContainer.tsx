import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import { requestColumns } from '../constants/time-off.columns';
import { useFindTimeOffRequest } from 'modules/store/employee/time-off/hooks/useFindTimeOffRequest';
import Box from '@mui/material/Box';
import UserEditModal from 'modules/security/users/containers/UserEditModal';
import { TimeOffListToolbar } from 'modules/store/employee/time-off/components/TimeOffListToolbar';

const TimeOffRequestsContainer = () => {
  const { isLoading, error, data } = useFindTimeOffRequest();

  return (
        <Box>
            <TabsFilter translation={'timeOff'} defaultView={'all'}/>
            <TimeOffListToolbar/>
            <Table columns={requestColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error}
                   select/>
            <UserEditModal/>
        </Box>
  );
};

export default memo(TimeOffRequestsContainer);
