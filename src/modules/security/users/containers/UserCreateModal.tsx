import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Grid } from '@mui/material';
import {
  ConditionContainer,
  DialogForm,
  Form,
  HandlerError,
  LoadingButton,
  SkeletonForm,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { useNavigate } from 'react-router';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import { SelectEmailUser } from 'modules/security/users/components/SelectUser';
import useUserInvitationForm from 'modules/security/users/hooks/useUserCreateForm';

type UserCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

const UserCreateModal = ({
  open,
  onClose,
  title,
}: UserCreateModalProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  const { control, onSubmit, isLoading, error, reset } = useUserInvitationForm(onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm open={open} title={t(title)} aria-labelledby={'user-creation-title'}>
      <DialogContent>
        <HandlerError error={error} errors={USERS_ERRORS} />
        <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'user-form'} dark>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
              <SelectEmailUser name='email' label={t('common:email')} placeholder='example@gmail.com' />
            </Grid>
            <Grid item xs={12}>
              <SelectRole name='security.roles' multiple label={t('roles')} placeholder={t('selectRoles')} />
            </Grid>
          </Grid>
        </Form>
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='user-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(UserCreateModal);
