import { memo, useCallback } from 'react';
import { Button, Box, DialogActions, DialogContent, Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Trans, useTranslation } from 'react-i18next';
import { DialogForm, Form, FormSelectAutocompleteField, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { IRole } from 'modules/security/roles/interfaces';
import useAddPermissionToRoleForm from 'modules/security/roles/hooks/useAddPermissionToRoleForm';
import { PERMISSIONS_GROUPS } from 'modules/security/roles/constants/permissions-group';

type AddPermissionToRoleModalProps = {
  open: boolean;
  role: IRole | undefined;
  onClose: () => void;
};

const components = {
  bold: <strong />,
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const AddPermissionToRoleModal = ({ open, onClose, role }: AddPermissionToRoleModalProps) => {
  const { t } = useTranslation('role');

  const { isLoading, reset, onSubmit, control, error } = useAddPermissionToRoleForm(role, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      maxWidth={'xs'}
      // onClose={handleClose}
      title={t('addPermission')}
      subtitle={<Trans i18nKey={'role:addPermissionSubtitle'} values={{ role: role?.name }} components={components} />}
      aria-labelledby={'add-permission-to-role-title'}
    >
      <DialogContent>
        <HandlerError error={error} />
        <Form
          onSubmit={onSubmit}
          control={control}
          isLoading={isLoading}
          size={'large'}
          id={'form-add-permissions-to-rol'}
        >
          <Box mt={1}>
            <FormSelectAutocompleteField
              name={'permissions'}
              multiple
              options={PERMISSIONS_GROUPS}
              groupBy={(option) => t(`permissions:${option.group as string}`)}
              disableCloseOnSelect
              getOptionLabel={(option) => (typeof option === 'string' ? option : option?.label)}
              isOptionEqualToValue={(option, value) => option?.value === value?.value || option?.value === value}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
                  {option.label}
                </li>
              )}
            />
          </Box>
        </Form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='form-add-permissions-to-rol'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(AddPermissionToRoleModal);
