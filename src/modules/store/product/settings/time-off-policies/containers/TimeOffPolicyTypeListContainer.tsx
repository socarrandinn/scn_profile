import React, { memo } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { ITimeOffPolicyType } from 'modules/store/product/settings/time-off-policies/interfaces';
import { useFindTimeOffTypes } from 'modules/store/product/settings/time-off-policies/hooks/useFindTimeOffTypes';
import { Divider } from '@mui/material';
import TimeOffTypeEditModal from 'modules/store/product/settings/time-off-policies/containers/TimeOffTypeEditModal';
import TimeOffTypeItem from 'modules/store/product/settings/time-off-policies/components/TimeOffTypeItem';
import { HandlerError } from '@dfl/mui-react-common';
import CircularProgress from '@mui/material/CircularProgress';

const ProductRuleListContainer = () => {
  const { isLoading, error, data } = useFindTimeOffTypes();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <TimeOffTypeEditModal />
      <HandlerError error={error} />
      <List>
        {data?.data?.map((item: ITimeOffPolicyType, idx: number) => (
          <React.Fragment key={item?._id || idx}>
            <TimeOffTypeItem rowId={item?._id || ''} item={item} />
            <Divider variant='inset' component='li' sx={{ marginLeft: 0 }} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default memo(ProductRuleListContainer);
