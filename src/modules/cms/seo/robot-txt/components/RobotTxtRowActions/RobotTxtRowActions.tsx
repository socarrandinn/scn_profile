import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteRobotTxt } from 'modules/cms/seo/robot-txt/hooks/useDeleteRobotTxt';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';

type UserStatusProps = {
  rowId: string;
};

const RobotTxtRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteRobotTxt(rowId, onClose);
  return (
    <>
      <Stack direction='row' spacing={1}>
        <EditRowActions onClick={handleEdit} />
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
        />
      </Stack>
    </>
  );
};

export default memo(RobotTxtRowActions);
