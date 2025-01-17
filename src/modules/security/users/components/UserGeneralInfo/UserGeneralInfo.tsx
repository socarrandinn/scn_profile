import { Box, Grid, Stack, SxProps, Typography } from '@mui/material';
import { memo, ReactNode } from 'react';
import { Form, FormTextField, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ACCOUNT_ERRORS } from 'modules/security/users/constants/account.errors';
import { useSecurity } from '@dfl/react-security';
import { FormPhoneInput } from 'components/libs/PhoneInput';

export type UserGeneralInfoProps = {
  isLoadingUser: boolean,
  control: any,
  onSubmit: any,
  size?: 'small' | 'medium',

  isLoading: boolean,
  readOnly?: boolean,
  className?: string,
  isMe?: boolean,
  error: any,
  sx?: SxProps,
  buttonText?: string,
  title?: ReactNode,
}

const UserGeneralInfo = ({
  isLoadingUser,
  control,
  onSubmit,
  isLoading,
  error,
  readOnly,
  size,
  className,
  buttonText,
  sx,
  isMe,
  title,
}: UserGeneralInfoProps) => {
  const { t } = useTranslation(['common', 'account']);
  const { hasPermission } = useSecurity();
  const canWritePermission = hasPermission('USER_WRITE');
  const canWrite = isMe || canWritePermission;

  if (isLoadingUser) {
    return <SkeletonForm numberItemsToShow={4} itemHeight={15} />;
  }

  return (
    <>
      {title ||
        <Typography variant={'h3'} mb={3}>
          {t('account:tabs.general')}
        </Typography>}
      <HandlerError error={error} errors={ACCOUNT_ERRORS} />
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control} readOnly={readOnly || !canWrite}>
        <Box className={className}>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} md={6}>
              <FormTextField
                fullWidth
                name='firstName'
                label={t('common:firstName')}
                placeholder='Value'
                sx={sx}
                size={size}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField
                fullWidth
                name='lastName'
                label={t('common:lastName')}
                placeholder='Value'
                sx={sx}
                size={size}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormPhoneInput
                fullWidth
                name='phone'
                label={t('common:phone')}
                placeholder='Value'
                sx={sx}
                size={size}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField
                fullWidth
                name='email'
                label={t('common:email')}
                placeholder='Value'
                disabled={!canWritePermission}
                sx={sx}
                size={size}
              />
            </Grid>
          </Grid>
          {canWrite &&
            <Box pb={2} pt={3}>
              <Stack alignItems='flex-end'>
                <LoadingButton variant='contained' color='success' type={'submit'} loading={isLoading}>
                  {t(buttonText || 'common:saveChange')}
                </LoadingButton>
              </Stack>
            </Box>
          }
        </Box>
      </Form>
    </>
  );
};

export default memo(UserGeneralInfo);
