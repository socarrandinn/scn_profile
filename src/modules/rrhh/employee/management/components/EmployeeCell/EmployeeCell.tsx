import { memo, ReactNode } from 'react';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';

type EmployeeCellProps = {
  employeeId: string;
  name: string;
  avatar?: IImageMedia;
  email?: string;
  category?: string;
  position?: string;
  titleComponent?: ReactNode;
  className?: string;
};

const EmployeeCell = ({ employeeId, name, avatar, email, category, position, titleComponent, className }: EmployeeCellProps) => {
  if (!employeeId) {
    return <></>;
  }
  return (
        <Box className={className}>
            {titleComponent}
            <ReactLink to={`/rrhh/employees/${employeeId}/personal`} underline={'hover'}>
                <FlexBox alignItems={'center'} gap={1}>
                    <Avatar alt={name} src={avatar?.thumb}/>
                    <Stack>
                        <Typography>{name}</Typography>
                        <Typography color={'text.secondary'} sx={{ textDecoration: 'none!important' }}>
                            {position || category || email}
                        </Typography>
                    </Stack>
                </FlexBox>
            </ReactLink>
        </Box>
  );
};

export default memo(EmployeeCell);
