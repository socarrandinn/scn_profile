import { memo } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { EMPLOYEE_DETAILS_SUMMARY } from 'modules/rrhh/employee/constants';
import { DetailStack, FlexBox, HandlerError } from '@dfl/mui-react-common';
import { useEmployeeDetail } from 'modules/rrhh/employee/contexts/EmployeeDetail';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';

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
          <Avatar sx={{ mb: 2, width: 100, height: 100, fontSize: '2rem' }}>
            {`${employee?.general?.firstName[0] || ''}${employee?.general?.lastName[0] || ''}`}
          </Avatar>
        </FlexBox>
        <Typography variant={'h3'} mt={1}>
          {`${employee?.general.firstName || ''} ${employee?.general.lastName || ''}`}
        </Typography>
        <Typography color={'text.secondary'}>{employee?.contacts?.emails?.find(email => email?.principal)?.value}</Typography>
      </Stack>

      <DetailStack
          details={EMPLOYEE_DETAILS_SUMMARY}
          data={employee?.general}
      />
    </Stack>
  );
};

export default memo(EmployeeDetail);
