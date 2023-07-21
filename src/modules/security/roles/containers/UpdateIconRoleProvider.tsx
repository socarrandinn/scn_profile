import { memo, useCallback } from 'react';
import { FontIconPicker, HandlerError } from '@dfl/mui-react-common';
import useRoleUpdateIconForm from 'modules/security/roles/hooks/useRoleUpdateIconForm';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';

const UpdateIconRoleProvider = () => {
  const { data: role } = useRoleProviderDetail();
  const { onSubmit, error } = useRoleUpdateIconForm(role);

  const handleSubmit = useCallback(
    (val: any) => {
      onSubmit({ icon: val } as any);
    },
    [onSubmit],
  );

  return (
        <>
            <HandlerError error={error}/>
            <FontIconPicker name='icon'
                            bgColor={'error'}
                            value={role?.icon} size='large' onSubmit={handleSubmit}/>
        </>
  );
};

export default memo(UpdateIconRoleProvider);
