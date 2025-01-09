import { memo, useCallback } from 'react';
import { Box, Button, DialogActions, DialogContent } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import { IClients } from 'modules/crm/clients/interfaces';
import useAddRoleToClientForm from 'modules/crm/clients/hooks/useAddRoleToClientForm';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

type AddRoleToClientModalProps = {
  open: boolean;
  client: IClients | undefined;
  onClose: () => void;
};

const components = {
  bold: <strong />,
};

const AddRoleToClientModal = ({ open, onClose, client }: AddRoleToClientModalProps) => {
  const { t } = useTranslation('users');
  const { isLoading, reset, onSubmit, control, error } = useAddRoleToClientForm(client, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      maxWidth='xs'
      title={t('addRoles')}
      subtitle={<Trans i18nKey='users:addRolesSubtitle' values={{ user: client?.fullName }} components={components} />}
      aria-labelledby='add-role-to-user-title'
    >
      <DialogContent>
        <HandlerError error={error} />
        <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size='large' id='form-add-roles-to-user'>
          <Box mt={1}>
            <SelectRole name={'roles'} placeholder={t('roles')} multiple type={ROLE_TYPE_ENUM.ROOT} />
          </Box>
        </Form>
      </DialogContent>

      <DialogActions>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='form-add-roles-to-user'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(AddRoleToClientModal);
