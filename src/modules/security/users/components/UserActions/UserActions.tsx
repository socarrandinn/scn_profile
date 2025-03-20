import { useCallback, useState, useEffect, memo } from 'react';
import { List, ListItem, ListItemText, Skeleton, Switch, Typography, Box } from '@mui/material';
import { useUserDetail } from 'modules/security/users/contexts/UserDetailContext';
import { useTranslation } from 'react-i18next';
import { useUpdateUserSecurity } from 'modules/security/users/hooks/useUpdateUserSecurity';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 14,
  margin: '0px 5px 0px 7px',
  width: 45,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));
export const LoadingSwitch = ({ name, color, checked, onChange, isLoading, variables }: any) => {
  const isMe = variables && name in variables;
  if (isMe && isLoading) {
    return <BorderLinearProgress color='primary' />;
  }
  return (
    <Switch name={name} color={color} disabled={isLoading && !isMe} edge='end' checked={checked} onChange={onChange} />
  );
};

const UserActions = () => {
  const { t } = useTranslation('users');
  const { user, setUser, isLoading } = useUserDetail();
  const [checkedLocked, setCheckedLocked] = useState(false);
  const [checkedVerified, setCheckedVerified] = useState(false);
  const { mutate, isLoading: isChanging, variables } = useUpdateUserSecurity(user);

  useEffect(() => {
    setCheckedLocked(!!user?.security?.lock);
    setCheckedVerified(!!user?.security?.verified);
  }, [user?.security?.lock, user?.security?.verified]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      mutate({
        [event.target.name]: event.target.checked,
      });

      user &&
        setUser &&
        setUser({
          ...user,
          [event.target.name]: event.target.checked,
        });
    },
    [setUser, user, mutate],
  );

  if (isLoading) {
    return (
      <>
        {[...Array(2)].map((_, index) => (
          <Box
            key={index}
            sx={{
              my: 2,
              mx: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Skeleton height={25} width='35%' variant='text' />
                <Skeleton width={20} height={20} variant='circular' />
              </Box>

              <Skeleton height={15} width='80%' variant='text' />
              <Skeleton height={15} width='80%' variant='text' />
            </Box>
          </Box>
        ))}
      </>
    );
  }

  return (
    <List dense>
      <ListItem key={'switch-list-label-lock'}>
        <ListItemText
          id={'switch-list-label-lock'}
          primary={t('locked')}
          secondary={
            <Typography fontSize={'small'} color={'text.secondary'}>
              {t('lockedDescription')}
            </Typography>
          }
        />
        <LoadingSwitch
          name='lock'
          color={'primary'}
          variables={variables}
          isLoading={isChanging}
          edge='end'
          checked={checkedLocked}
          onChange={handleChange}
        />
      </ListItem>
      <ListItem key={'switch-list-label-verify'}>
        <ListItemText
          id={'switch-list-label-verify'}
          primary={t('verified')}
          secondary={
            <Typography fontSize={'small'} color={'text.secondary'}>
              {t('verifiedDescription')}
            </Typography>
          }
        />
        <LoadingSwitch
          name='verified'
          color={'primary'}
          variables={variables}
          isLoading={isChanging}
          edge='end'
          checked={checkedVerified}
          onChange={handleChange}
        />
      </ListItem>
    </List>
  );
};

export default memo(UserActions);
