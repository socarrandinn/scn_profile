import React, { memo } from 'react';
import Box from '@mui/material/Box';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';
import List from '@mui/material/List';
import { useFindTimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/hooks/useFindTimeOffPolicies';
import TimeOffPolicyItem from 'modules/rrhh/settings/time-off-policies/components/TimeOffPolicyItem';
import { HandlerError } from '@dfl/mui-react-common';
import TimeOffPolicyEditModal from 'modules/rrhh/settings/time-off-policies/containers/TimeOffPolicyEditModal';
import CircularProgress from '@mui/material/CircularProgress';
import { Divider } from '@mui/material';

const TimeOffPolicyListContainer = () => {
  const { isLoading, error, data } = useFindTimeOffPolicies();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <TimeOffPolicyEditModal />
      <HandlerError error={error} />
      <List>
        {data?.data?.map((item: ITimeOffPolicies, idx: number) => (
          <>
            {/* @ts-ignore */}
            <TimeOffPolicyItem key={item?._id || idx} rowId={item?._id || ''} item={item} />
            <Divider variant='inset' component='li' sx={{ marginLeft: 0 }} />
          </>
        ))}
      </List>
    </Box>
  );
};

export default memo(TimeOffPolicyListContainer);
