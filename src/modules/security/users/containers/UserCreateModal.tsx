import { memo, useCallback, useEffect } from 'react';
import { Alert, Button, DialogActions, DialogContent, Grid } from '@mui/material';
import {
  ChildrenProps,
  DialogForm,
  Form,
  HandlerError,
  LoadingButton,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import useUserCreateForm from 'modules/security/users/hooks/useUserCreateForm';
import { useToggle } from '@dfl/hook-utils';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { FromCreateToInvite } from '../components/FromCreateToInvite';
import { UserBasicForm } from '../components/UserBasicForm';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

type UserCreateModalProps = ChildrenProps & {
  open: boolean;
  onClose: () => void;
  validationScheme: any;
  queryKey: string;
  apiPath: string;
  provider?: string;
  redirect: string;
  rolesType: ROLE_TYPE_ENUM
};

const UserCreateModal = ({
  children,
  open,
  onClose,
  redirect,
  apiPath,
  validationScheme,
  queryKey,
  rolesType,
  provider,
}: UserCreateModalProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  const { isOpen: isOpenAlert, onClose: onCloseAlert } = useToggle(true);
  const { control, onSubmit, isLoading, error, reset, watch, setValue } = useUserCreateForm(validationScheme, onClose, queryKey);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  useEffect(() => {
    if (provider) {
      setValue('space', provider);
      setValue('type', PROVIDER_TYPE_ENUM.LOGISTIC);
    }
  }, [provider]);

  return (
    <>
      <DialogForm open={open} title={t('create')} aria-labelledby={'user-creation-title'}>
        <DialogContent>
          {isOpenAlert &&
            <Alert icon={false} severity='warning' className={'mb-4'}
              onClose={onCloseAlert}>{t('help.newUser')}</Alert>}
          <HandlerError error={error} errors={USERS_ERRORS} />
          <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'user-form'} dark
            watch={watch}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <UserBasicForm />
              {children}
              <Grid item xs={12}>
                <SelectRole
                  name='security.roles'
                  multiple
                  required
                  label={t('roles')}
                  placeholder={t('users:selectRoles')}
                  type={rolesType}
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
      <FromCreateToInvite error={error} watch={watch} redirect={redirect} apiPath={apiPath} />
    </>
  );
};

export default memo(UserCreateModal);
