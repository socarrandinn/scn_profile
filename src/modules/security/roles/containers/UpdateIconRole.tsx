// @ts-nocheck
import { memo, useCallback, useMemo } from 'react';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { Form, HandlerError } from '@dfl/mui-react-common';
import useRoleUpdateIconForm from 'modules/security/roles/hooks/useRoleUpdateIconForm';
import FontIconPicker from 'components/libs/FontIconPicker';

const UpdateIconRole = () => {
  const { data: role } = useRoleDetail();

  const icon = useMemo(() => {
    if (role?.icon === 'owner' || role?.icon === 'role4') return 'AssignmentIndIcon';
    if (role?.icon === 'account' || role?.icon === 'role12') return 'AdminPanelSettingsIcon';
    if (role?.icon === 'secure' || role?.icon === 'role9') return 'VerifiedUserIcon';
    return role?.icon;
  }, [role?.icon]);

  const { isLoading, onSubmit, control, error, setValue } = useRoleUpdateIconForm(role);

  const handleSubmit = useCallback(
    (val) => {
      setValue('avatar', val);
      onSubmit({ avatar: val }).then();
    },
    [onSubmit],
  );

  return (
    <>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id={'form-update-icon-to-role'}>
        <FontIconPicker name='role.icon' defaultValue={icon} size='large' onSubmit={handleSubmit} />
      </Form>
    </>
  );
};

export default memo(UpdateIconRole);
