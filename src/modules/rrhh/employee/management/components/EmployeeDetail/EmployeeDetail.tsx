import { memo } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { FlexBox, HandlerError } from '@dfl/mui-react-common';
import { useEmployeeDetail } from 'modules/rrhh/employee/management/contexts/EmployeeDetail';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import AvatarEmployee from 'modules/rrhh/employee/management/components/AvatarEmployee/AvatarEmployee';
import { IEmployee, IEmployeeUpdate } from 'modules/rrhh/employee/management/interfaces';
import Contacts from 'modules/rrhh/employee/management/components/EmployeeDetail/Contacts';

const EmployeeDetail = () => {
  const { employee, isLoading, error } = useEmployeeDetail();

  if (isLoading) {
    return <SummaryWithAvatarSkeleton />;
  }
  if (error) {
    return <HandlerError error={error} />;
  }

  return (
    <Stack p={2} spacing={2}>
      <Stack direction='column' alignItems='center' spacing={0}>
        <FlexBox flexDirection={'column'} alignItems={'center'}>
          <AvatarEmployee employee={employee as IEmployeeUpdate} />
        </FlexBox>
        <Typography variant={'h3'} mt={1}>
          {`${employee?.general.firstName || ''} ${employee?.general.lastName || ''}`}
        </Typography>
      </Stack>

      <Divider />

      <Box>
        <Contacts employee={employee as IEmployee} />
      </Box>
    </Stack>
  );
};

export default memo(EmployeeDetail);
