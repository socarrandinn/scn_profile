import { memo } from 'react';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import { Box } from '@mui/material';
import { timeOffTabs } from 'modules/rrhh/time-off/constants/time-off.tabs';
import timeOffRoutes from 'modules/rrhh/time-off/routes/time-off';

const TimeOffRequestsList = () => {
  return (
    <Box pt={1}>
      <TabsHeader>
        <RouterTab tabs={timeOffTabs} prefix={'/rrhh/time-off'} translationNs={'timeOff'} />
      </TabsHeader>
      <Box>
        <RouteLoader routes={timeOffRoutes} notfoundRedirect={'/rrhh/time-off/requests'} />
      </Box>
    </Box>
  );
};

export default memo(TimeOffRequestsList);
