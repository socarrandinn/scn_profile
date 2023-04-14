import { memo, useCallback } from 'react';
import { Box, Button, DialogActions, DialogContent } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import useAddRoleToUserForm from 'modules/security/users/hooks/useAddRoleToUserForm';

type AddRoleToUserModalProps = {
  open: boolean;
  user: IUser | undefined;
  onClose: () => void;
};

const components = {
  bold: <strong />,
};

const AddRoleToUserModal = ({ open, onClose, user }: AddRoleToUserModalProps) => {
  const { t } = useTranslation('users');
  const { isLoading, reset, onSubmit, control, error } = useAddRoleToUserForm(user, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      maxWidth='xs'
      onClose={handleClose}
      title={t('addRoles')}
      subtitle={<Trans i18nKey='users:addRolesSubtitle' values={{ user: user?.fullName }} components={components} />}
      aria-labelledby='add-role-to-user-title'
    >
      <DialogContent>
        <HandlerError error={error} />
        <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size='large' id='form-add-roles-to-user'>
          <Box mt={1}>
            <SelectRole name={'roles'} placeholder={t('roles')} multiple />
          </Box>
        </Form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='form-add-roles-to-user'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(AddRoleToUserModal);
