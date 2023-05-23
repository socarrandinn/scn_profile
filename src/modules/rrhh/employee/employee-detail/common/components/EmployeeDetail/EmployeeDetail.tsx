import React, { memo } from 'react';
import { Box, Divider, Stack } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { IEmployee } from 'modules/rrhh/employee/common/interfaces';
import { ContactsPreview } from 'modules/rrhh/employee/employee-detail/common/components/ContactsPreview';
import { HirePreview } from 'modules/rrhh/employee/employee-detail/common/components/HirePreview';
import { CategorySection } from 'modules/rrhh/employee/employee-detail/common/components/CategorySection';
import EmployeeCell from 'modules/rrhh/employee/management/components/EmployeeCell/EmployeeCell';

const EmployeeDetail = () => {
  const { employee, isLoading, error } = useEmployeeDetail();

  if (isLoading) {
    return <SummaryWithAvatarSkeleton/>;
  }
  if (error) {
    return <HandlerError error={error}/>;
  }
  const manager = employee?.jobInformation.reported as IEmployee;

  return (
        <Stack p={2} spacing={2}>
            {/* <Stack direction='column' alignItems='center' spacing={0}> */}
            {/*    <FlexBox flexDirection={'column'} alignItems={'center'}> */}
            {/*        <AvatarEmployee employee={employee as IEmployeeUpdate}/> */}
            {/*    </FlexBox> */}
            {/*    <Typography variant={'h3'} mt={1}> */}
            {/*        {`${employee?.general.firstName || ''} ${employee?.general.lastName || ''}`} */}
            {/*    </Typography> */}
            {/* </Stack> */}

            {/* <Divider/> */}
            <CategorySection category={employee?.category}/>

            <Box>
                <ContactsPreview contacts={employee?.contacts} social={employee?.social}/>
                <Divider sx={{ margin: '15px 0px' }}/>
                <HirePreview hiring={employee?.hiring}/>
                <Divider sx={{ margin: '15px 0px', maxWidth: 100 }}/>
                <EmployeeCell
                    avatar={manager?.general?.avatar}
                    employeeId={manager?._id}
                    name={`${manager?.general?.firstName} ${manager?.general?.lastName}`}
                    category={manager?.category?.name}
                />
            </Box>
        </Stack>
  );
};

export default memo(EmployeeDetail);
