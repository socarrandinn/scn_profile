import { memo } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';

type EmployeeCellProps = {
  employeeId: string;
  name: string;
  avatar?: IImageMedia;
  email?: string;
  category?: string;
};

const EmployeeCell = ({ employeeId, name, avatar, email, category }: EmployeeCellProps) => {
  if (!employeeId) {
    return <></>
  }
  return (
        <ReactLink to={`/rrhh/employees/${employeeId}/personal`} underline={'hover'}>
            <FlexBox alignItems={'center'} gap={1}>
                <Avatar alt={name} src={avatar?.thumb}/>
                <Stack>
                    <Typography>{name}</Typography>
                    <Typography color={'text.secondary'} sx={{ textDecoration: 'none!important' }}>
                        {category || email}
                    </Typography>
                </Stack>
            </FlexBox>
        </ReactLink>
  );
};

export default memo(EmployeeCell);
