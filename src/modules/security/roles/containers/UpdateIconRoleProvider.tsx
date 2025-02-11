import { memo, useCallback } from 'react';
import { FontIconPicker, HandlerError } from '@dfl/mui-react-common';
import useRoleProviderUpdateIconForm from '../hooks/useRoleProviderUpdateIconForm';
import { useRoleDetail } from '../contexts';
import { IRoleProvider } from '../interfaces';

const UpdateIconRoleProvider = () => {
  const { data: role } = useRoleDetail();
  const { onSubmit, error } = useRoleProviderUpdateIconForm(role as IRoleProvider);

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
