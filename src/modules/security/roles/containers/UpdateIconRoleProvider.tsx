import { memo, useCallback } from 'react';
import { FontIconPicker, HandlerError } from '@dfl/mui-react-common';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import useRoleProviderUpdateIconForm from '../hooks/useRoleProviderUpdateIconForm';

const UpdateIconRoleProvider = () => {
  const { data: role } = useRoleProviderDetail();
  const { onSubmit, error } = useRoleProviderUpdateIconForm(role);

  const handleSubmit = useCallback(
    (val: any) => {
      onSubmit({ icon: val } as any);
    },
    [onSubmit],
  );

  return (
        <>
            <HandlerError error={error} />
            <FontIconPicker name='icon'
                bgColor={'error'}
                value={role?.icon} size='large' onSubmit={handleSubmit} />
        </>
  );
};

export default memo(UpdateIconRoleProvider);
