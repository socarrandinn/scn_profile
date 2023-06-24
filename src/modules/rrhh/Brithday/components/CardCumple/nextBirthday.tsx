import { ChildrenProps, DateValue } from '@dfl/mui-react-common';
import { Box, Chip, Paper, styled, Typography } from '@mui/material';
import { memo } from 'react';
import { INestBrithday } from '../../Interface/INextBrithday';
import { useSecurity } from '@dfl/react-security';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/management/constants';
import { Link, LinkProps } from 'react-router-dom';
import { AvatarMedia } from 'components/AvatarMedia';

export const PaperStl = styled(Paper)<{ days: number }>(({ days, theme }) => {
  let color = theme.palette.primary.main
  if (days > 5) {
    color = '#a4328a'
  }
  if (days > 10) {
    color = '#8a88c2'
  }
  if (days > 15) {
    color = '#c793a0'
  }
  return {
    minHeight: 140,
    width: '46%',
    backgroundColor: color,
    padding: 10,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(/images/fondoCard.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    flexDirection: 'column',
    gap: 2
  }
});

const ContainerLinkW = ({ children, to, ...props }: ChildrenProps & LinkProps) => {
  const { hasPermission } = useSecurity();
  const hasView = hasPermission(EMPLOYEE_PERMISSIONS.EMPLOYEE_VIEW)
  if (hasView) {
    return (
            <Link to={to} {...props}>
                {children}
            </Link>
    )
  }
  return (
        <>
            {children}
        </>
  )
}

export const ContainerLink = styled(ContainerLinkW)(() => ({
  display: 'block',
  width: '46%',
  textDecoration: 'none',
  '.MuiPaper-root': {
    width: '100%'
  }
}));

const NextBirthday = ({ employee }: INestBrithday) => {
  const current = new Date()
  const birthday = new Date(employee?.general?.birthday);
  birthday.setFullYear(birthday.getMonth() < current.getMonth() ? current.getFullYear() + 1 : current.getFullYear())
  // calculate difference in milliseconds
  const diffInMs = Math.abs(birthday.getTime() - current.getTime());
  // convert milliseconds to days
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  return (
        <ContainerLink to={`/rrhh/employees/${employee._id}/personal`}>
            <PaperStl days={diffInDays}>
                <AvatarMedia name={employee?.general?.firstName} avatar={employee?.general?.avatar}/>
                <Box>
                    <Typography style={{ color: 'white' }}>
                        {employee?.general?.firstName}
                    </Typography>
                    <Typography style={{ fontSize: 'smaller', color: '#ffffff9c' }}>
                        {employee?.jobInformation?.position?.name}
                    </Typography>
                </Box>
                <Chip label={<DateValue value={birthday} fromNow/>} color={'opacity'} size={'small'}
                      sx={{ minWidth: 100 }}/>
            </PaperStl>
        </ContainerLink>
  );
};

export default memo(NextBirthday);
