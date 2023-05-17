import { memo, useCallback, useMemo } from 'react';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { FontIconPicker, Form, FormFontIconPicker, HandlerError } from '@dfl/mui-react-common';
import useRoleUpdateIconForm from 'modules/security/roles/hooks/useRoleUpdateIconForm';

const UpdateIconRole = () => {
  const { data: role } = useRoleDetail();
  const { isLoading, onSubmit, error } = useRoleUpdateIconForm(role);

  const handleSubmit = useCallback(
    (val: any) => {
      onSubmit({ icon: val } as any);
    },
    [onSubmit],
  );

  return (
        <>
            <HandlerError error={error}/>
            <FontIconPicker name='icon' value={role?.icon} size='large' onSubmit={handleSubmit}/>
        </>
  );
};

export default memo(UpdateIconRole);
