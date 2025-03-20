import { memo, useCallback, useEffect } from 'react';
import { Alert, Button, DialogActions, DialogContent, Grid } from '@mui/material';
import { ChildrenProps, DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import { SelectEmailUser } from 'modules/security/users/components/SelectUser';
import { useToggle } from '@dfl/hook-utils';
import useUsersInviteForm from 'modules/security/users/hooks/useUsersInviteForm';
import FromInviteToDetails from 'modules/security/users/components/FromInviteToDetails/FromInviteToDetails';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

type UserCreateModalProps = ChildrenProps & {
  open: boolean;
  onClose: () => void;
  validationScheme: any;
  apiPath: string;
  provider?: string;
  queryKey: string;
  redirect: string;
  rolesType: ROLE_TYPE_ENUM;
  providerType?: PROVIDER_TYPE_ENUM;
};

const UserInvitationModal = ({
  children,
  open,
  onClose,
  queryKey,
  provider,
  providerType,
  apiPath,
  validationScheme,
  redirect,
  rolesType,
}: UserCreateModalProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  const { isOpen: isOpenAlert, onClose: onCloseAlert } = useToggle(true);
  const { control, onSubmit, isLoading, error, watch, setValue, reset } = useUsersInviteForm(
    validationScheme,
    redirect,
    apiPath,
    onClose,
    queryKey,
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  useEffect(() => {
    if (provider) {
      setValue('space', provider);
      setValue('type', providerType);
    }
  }, [provider, setValue, providerType]);

  return (
    <>
      <DialogForm open={open} title={t('inviteUser')} aria-labelledby={'user-creation-title'}>
        <DialogContent>
          {isOpenAlert && (
            <Alert icon={false} severity='warning' className={'mb-4'} onClose={onCloseAlert}>
              {t('help.inviteUser')}
            </Alert>
          )}
          <HandlerError error={error} errors={USERS_ERRORS} />
          <Form
            onSubmit={onSubmit}
            control={control}
            isLoading={isLoading}
            size={'small'}
            id={'user-form'}
            dark
            watch={watch}
          >
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={12}>
                <SelectEmailUser required name='email' label={t('common:email')} placeholder='example@gmail.com' />
              </Grid>
              {children}
              <Grid item xs={12}>
                <SelectRole
                  name='security.roles'
                  multiple
                  label={t('roles')}
                  placeholder={t('selectRoles')}
                  required
                  type={rolesType}
                />
              </Grid>
            </Grid>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button variant='grey' onClick={handleClose}>
            {t('common:cancel')}
          </Button>
          <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='user-form'>
            {t('common:save')}
          </LoadingButton>
        </DialogActions>
      </DialogForm>
      <FromInviteToDetails error={error} redirect={redirect} onClose={onClose} />
    </>
  );
};

export default memo(UserInvitationModal);
