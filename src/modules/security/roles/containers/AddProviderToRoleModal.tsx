import { memo, useCallback } from 'react';
import { Button, Box, DialogActions, DialogContent } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { SelectUser } from 'modules/security/users/components/SelectUser';
import { useRoleDetail } from '../contexts/RoleDetailContext';
import useRoleAddProvidersForm from '../hooks/useRoleAddProvidersForm';
import { SupplierSelect } from 'modules/inventory/provider/supplier/components/SupplierSelect';

type AddPermissionToRoleModalProps = {
  open: boolean;
  onClose: () => void;
  providerType?: string | null;
};

const components = {
  bold: <strong />,
};

const AddProviderToRoleModal = ({ open, onClose, providerType }: AddPermissionToRoleModalProps) => {
  const { t } = useTranslation('role');

  const { data: role } = useRoleDetail();
  const { isLoading, reset, onSubmit, control, error } = useRoleAddProvidersForm(role, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      maxWidth={'xs'}
      title={t('addUser')}
      subtitle={<Trans i18nKey={'role:addUserSubtitle'} values={{ role: role?.name }} components={components} />}
      aria-labelledby={'add-provider-to-role-title'}
    >
      <DialogContent>
        <HandlerError error={error} />
        <Form
          onSubmit={onSubmit}
          control={control}
          isLoading={isLoading}
          size={'large'}
          id={'form-add-provider-to-role'}
        >
          <Box mt={1}>
          </Box>
          <Box mt={1}>
            <SelectUser name={'users'} placeholder={t('users')} />
          </Box>
          <Box mt={1}>
            <SupplierSelect name={'provider'} placeholder={t('provider')} />
          </Box>
        </Form>
      </DialogContent>

      <DialogActions>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='form-add-provider-to-role'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(AddProviderToRoleModal);
