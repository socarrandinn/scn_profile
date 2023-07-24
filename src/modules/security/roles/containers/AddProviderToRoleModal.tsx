import { memo, useCallback } from 'react';
import { Button, Box, DialogActions, DialogContent } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { SelectUser } from 'modules/security/users/components/SelectUser';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import useRoleAddProvidersForm from '../hooks/useRoleAddProvidersForm';

type AddPermissionToRoleModalProps = {
  open: boolean;
  onClose: () => void;
};

const components = {
  bold: <strong />,
};

const AddProviderToRoleModal = ({ open, onClose }: AddPermissionToRoleModalProps) => {
  const { t } = useTranslation('role');

  const { data: role } = useRoleProviderDetail();
  const { isLoading, reset, onSubmit, control, error, formState } = useRoleAddProvidersForm(role, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      maxWidth={'xs'}
      onClose={handleClose}
      title={t('addUser')}
      subtitle={<Trans i18nKey={'role:addUserSubtitle'} values={{ role: role?.name }} components={components} />}
      aria-labelledby={'add-provider-to-role-title'}
    >
      <DialogContent>s
        <HandlerError error={error} />
        <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id={'form-add-provider-to-role'}>
          <pre>{JSON.stringify(formState.errors)}</pre>
          <Box mt={1}>
            <SelectUser name={'provider-users'} placeholder={t('providersList')} />
          </Box>
        </Form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='form-add-provider-to-role'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(AddProviderToRoleModal);
