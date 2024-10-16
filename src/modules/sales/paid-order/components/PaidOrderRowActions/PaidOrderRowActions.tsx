import { memo } from 'react';
import { Stack } from '@mui/material';

type UserStatusProps = {
  rowId: string;
};

const PaidOrderRowActions = ({ rowId }: UserStatusProps) => {
  return (
    <>
      <Stack direction='row' spacing={1}>
        Definir
      </Stack>
    </>
  );
};

export default memo(PaidOrderRowActions);
