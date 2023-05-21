import { memo } from 'react';
import { FormTextField, Span, LoadingButton, HandlerError, ConditionContainer } from '@dfl/mui-react-common';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { ReactLink } from '@dfl/react-security';
import Box from '@mui/material/Box';
import useRecoveryPasswordInitForm from 'modules/authentication/hooks/useRecoveryPasswordInitForm';
import { LOGIN_ERRORS } from 'modules/authentication/constants';
import { RecoveryPasswordSent } from 'modules/authentication/components/RecoveryPasswordSent';
import { Typography } from '@mui/material';

const RecoveryInitContainer = () => {
  const { t } = useTranslation(['authentication', 'common']);
  const { onSubmit, control, isLoading, error, isSuccess, data, reset } = useRecoveryPasswordInitForm();

  return (
        <div>
            <ConditionContainer
                active={!isSuccess}
                alternative={<RecoveryPasswordSent email={data?.email} reset={reset} isLoading={isLoading}/>}
            >
                <HandlerError error={error} errors={LOGIN_ERRORS}/>
                <Typography mb={2}>{t('recovery.helpText')}</Typography>
                <form onSubmit={onSubmit}>
                    <Grid container columnSpacing={2} rowSpacing={4}>
                        <Grid item xs={12}>
                            <FormTextField name='email' label={t('common:email')} control={control}
                                           disabled={isLoading}/>
                        </Grid>
                    </Grid>
                    <Box mt={4}>
                        <LoadingButton fullWidth type='submit' variant='contained' size={'large'} loading={isLoading}>
                            {t('resetPassword')}
                        </LoadingButton>
                    </Box>
                </form>
            </ConditionContainer>
            <Box mt={2} textAlign={'center'}>
                <Span mt={3} color='text.secondary'>
                    {t('notHaveAccount')}
                    <ReactLink to='/auth/signup' underline='hover'>
                        {t('createAccount')}
                    </ReactLink>
                </Span>
            </Box>
        </div>
  );
};

export default memo(RecoveryInitContainer);
