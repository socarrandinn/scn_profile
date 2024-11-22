import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { ReactLink } from '@dfl/react-security';
import { useDeleteLogistics } from 'modules/inventory/provider/logistics/hooks/useDeleteLogistics';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { DELETE_PROVIDER_ERRORS } from 'modules/inventory/provider/common/constants/provider-errors';

type UserStatusProps = {
  rowId: string;
};

const LogisticsRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteLogistics(rowId, onClose);

  return (
    <>
      <Stack direction='row' spacing={1}>
        <ReactLink to={`/inventory/settings/logistics/${rowId}/general?edit=true`}>
          <EditRowActions />
        </ReactLink>
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
          errors={DELETE_PROVIDER_ERRORS}
        />
      </Stack>
    </>
  );
};

export default memo(LogisticsRowActions);
