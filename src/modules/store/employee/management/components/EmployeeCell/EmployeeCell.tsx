import { memo, ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import { ReactLink, useSecurity } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import { EMPLOYEE_PERMISSIONS } from 'modules/store/employee/management/constants';

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

const LinkPermission = ({ children, employeeId }: ChildrenProps & { employeeId: string }) => {
  const { hasPermission } = useSecurity()
  if (hasPermission(EMPLOYEE_PERMISSIONS.EMPLOYEE_VIEW)) {
    return <ReactLink to={`/rrhh/employees/${employeeId}/personal`} underline={'hover'}>
            {children}
        </ReactLink>
  }
  return <>{children}</>
}

const EmployeeCell = ({
  employeeId,
  name,
  avatar,
  email,
  category,
  position,
  titleComponent,
  className
}: EmployeeCellProps) => {
  if (!employeeId) {
    return <></>;
  }
  return (
        <Box className={className}>
            {titleComponent}
            <LinkPermission employeeId={employeeId}>
                <FlexBox alignItems={'center'} gap={1}>
                    <AvatarMedia alt={name} avatar={avatar}/>
                    <Stack>
                        <Typography>{name}</Typography>
                        <Typography color={'text.secondary'} sx={{ textDecoration: 'none!important' }}>
                            {position || category || email}
                        </Typography>
                    </Stack>
                </FlexBox>
            </LinkPermission>
        </Box>
  );
};

export default memo(EmployeeCell);
