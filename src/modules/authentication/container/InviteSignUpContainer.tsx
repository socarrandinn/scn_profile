import { memo } from 'react';
import {
  ConditionContainer,
  Form,
  FormPasswordField,
  FormSwitchField,
  FormTextField,
  HandlerError,
  LoadingButton,
  Span,
} from '@dfl/mui-react-common';
import Grid from '@mui/material/Grid';
import { Trans, useTranslation } from 'react-i18next';
import { SIGNUP_ERRORS } from '../constants/login.errors';
import { SignUpSent } from 'modules/authentication/components/SignUpSent';
import { ReactLink } from '@dfl/react-security';
import Box from '@mui/material/Box';
import useInviteSignUpForm from '../hooks/useInviteSignUpForm';
import { useParams } from 'react-router';
import { CircularProgress } from '@mui/material';
const components = {
  terms: <ReactLink to={'/terms-conditions'} target='_blank' underline='hover' />,
  small: <Span color='primary.main' />,
};

const InviteSignUpContainer = () => {
  const { t } = useTranslation(['authentication', 'common']);

  const { key: inviteCode } = useParams();
  const { onSubmit, control, isLoading, error, isSuccess, data, termAcceptance, isEmailLoading } = useInviteSignUpForm(
    inviteCode as string,
  );

  return (
    <Box sx={{ my: 3 }}>
      <ConditionContainer active={!isSuccess} alternative={<SignUpSent email={data?.email} />}>
        <HandlerError error={error} errors={SIGNUP_ERRORS} />
        <Form onSubmit={onSubmit} isLoading={isLoading}>
          <Grid container columnSpacing={2} rowSpacing={4}>
            <Grid item xs={12} md={6}>
              <FormTextField
                required
                name='firstName'
                label={t('common:firstName')}
                control={control}
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField
                required
                name='lastName'
                label={t('common:lastName')}
                control={control}
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <FormTextField
                readOnly
                required
                name='email'
                label={t('common:email')}
                control={control}
                disabled={isLoading}
                {...(isEmailLoading
                  ? {
                      InputProps: {
                        endAdornment: (
                          <Box sx={{ display: 'flex' }} mr={1}>
                            <CircularProgress sx={{ width: '18px !important', height: '18px !important' }} />
                          </Box>
                        ),
                      },
                    }
                  : {})}
              />
            </Grid>
            <Grid item xs={12}>
              <FormPasswordField
                required
                name='password'
                label={t('common:password')}
                control={control}
                disabled={isLoading}
              />
            </Grid>
          </Grid>
          <Box mt={2}>
            <FormSwitchField
              name='acceptTerms'
              label={<Trans i18nKey='authentication:acceptTerms' components={components} />}
              control={control}
              disabled={isLoading}
            />
          </Box>
          <Box mt={4}>
            <LoadingButton
              fullWidth
              type='submit'
              variant='contained'
              size={'large'}
              loading={isLoading}
              disabled={!termAcceptance}
            >
              {t('signup')}
            </LoadingButton>
          </Box>
        </Form>
      </ConditionContainer>
      <Box mt={2} textAlign={'center'}>
        <Span mt={3} color='text.secondary'>
          {t('haveAccount')}
          <ReactLink to='/auth/login' underline='hover'>
            {t('login')}
          </ReactLink>
        </Span>
      </Box>
    </Box>
  );
};

export default memo(InviteSignUpContainer);
