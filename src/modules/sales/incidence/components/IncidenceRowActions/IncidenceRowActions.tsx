import { memo } from 'react';
import { Stack } from '@mui/material';
import { useParamsLink } from '@dfl/react-security';
import { EditRowActions } from '@dfl/mui-admin-layout';

type UserStatusProps = {
  rowId: string;
};

const IncidenceRowActions = ({ rowId }: UserStatusProps) => {
  const handleEdit = useParamsLink({ edit: rowId });

  return (
    <Stack direction='row' spacing={1}>
      <EditRowActions onClick={handleEdit} />
    </Stack>
  );
};

export default memo(IncidenceRowActions);
