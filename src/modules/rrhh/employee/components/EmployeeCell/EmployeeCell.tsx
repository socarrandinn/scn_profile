import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';

type EmployeeCellProps = {
  employeeId: string;
  name: string;
  email?: string;
};

const EmployeeCell = ({ employeeId, name, email }: EmployeeCellProps) => {
  return (
    <ReactLink to={`/rrhh/employees/${employeeId}/general`} underline={'hover'}>
      <FlexBox alignItems={'center'}>
        <Stack>
          <Typography>{name}</Typography>
          <Typography color={'text.secondary'} sx={{ textDecoration: 'none!important' }}>
            {email}
          </Typography>
        </Stack>
      </FlexBox>
    </ReactLink>
  );
};

export default memo(EmployeeCell);
