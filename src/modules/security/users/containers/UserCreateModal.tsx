import { memo, useCallback } from 'react';
import { Alert, Button, DialogActions, DialogContent, Grid } from '@mui/material';
import {
  DialogForm,
  Form, FormTextField,
  HandlerError,
  LoadingButton,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import useUserCreateForm from 'modules/security/users/hooks/useUserCreateForm';
import { useToggle } from '@dfl/hook-utils';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

type UserCreateModalProps = {
  open: boolean;
  onClose: () => void;
};

const UserCreateModal = ({
  open,
  onClose,
}: UserCreateModalProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  const { isOpen: isOpenAlert, onClose: onCloseAlert } = useToggle(true);
  const { control, onSubmit, isLoading, error, reset, watch } = useUserCreateForm(onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <>
      <DialogForm open={open} title={t('create')} aria-labelledby={'user-creation-title'}>
        <DialogContent>
          {isOpenAlert &&
            <Alert icon={false} severity='warning' className={'mb-4'}
                   onClose={onCloseAlert}>{t('help.newUser')}</Alert>}
          <HandlerError error={error} errors={USERS_ERRORS} />
          <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'user-form'} dark>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={12} md={6}>
                <FormTextField
                  fullWidth
                  autoFocus
                  required
                  name='firstName'
                  label={t('common:firstName')}
                  placeholder={t('common:firstName')}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormTextField
                  fullWidth
                  name='lastName'
                  required
                  label={t('common:lastName')}
                  placeholder={t('common:lastName')}
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  fullWidth
                  name='email'
                  required
                  label={t('common:email')}
                  placeholder='example@gmail.com'
                />
              </Grid>
              <Grid item xs={12}>
                <SelectRole
                  name='security.roles'
                  multiple
                  required
                  label={t('roles')}
                  placeholder={t('users:selectRoles')}
                  type={ROLE_TYPE_ENUM.ROOT}
                />
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
      {/* <FromCreateToInvite error={error} watch={watch} /> */}
    </>
  );
};

export default memo(UserCreateModal);
