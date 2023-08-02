import React, { memo } from 'react';
import Box from '@mui/material/Box';
import { ITimeOffPolicies } from 'modules/store/product/settings/time-off-policies/interfaces';
import List from '@mui/material/List';
import { useFindTimeOffPolicies } from 'modules/store/product/settings/time-off-policies/hooks/useFindTimeOffPolicies';
import TimeOffPolicyItem from 'modules/store/product/settings/time-off-policies/components/TimeOffPolicyItem';
import { HandlerError } from '@dfl/mui-react-common';
import TimeOffPolicyEditModal from 'modules/store/product/settings/time-off-policies/containers/TimeOffPolicyEditModal';
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
          <React.Fragment key={item?._id || idx}>
            <TimeOffPolicyItem rowId={item?._id || ''} item={item} />
            <Divider variant='inset' component='li' sx={{ marginLeft: 0 }} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default memo(TimeOffPolicyListContainer);
