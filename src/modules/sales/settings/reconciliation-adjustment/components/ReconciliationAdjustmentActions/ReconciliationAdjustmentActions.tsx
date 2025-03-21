import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { ConditionContainer, FlexBox } from '@dfl/mui-react-common';
import { useParamsLink } from '@dfl/react-security';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import IconButton from '@mui/material/IconButton';
import { useReconciliationAdjustmentDelete } from '../../hooks/useReconciliationAdjustmentDelete';

type ReconciliationAdjustmentActionsProp = {
  rowId: string;
  record: any;
};

const ReconciliationAdjustmentActions = ({ rowId, record }: ReconciliationAdjustmentActionsProp) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const handleDetails = useParamsLink({ details: rowId });

  const { mutate, isLoading, error } = useReconciliationAdjustmentDelete(rowId, onClose);

  return (
    <FlexBox justifyContent={'center'} alignItems={'center'}>
      <ConditionContainer
        active={!record?.conciliation}
        alternative={
          <IconButton color='secondary' aria-label='details' onClick={handleDetails}>
            <MonetizationOnOutlinedIcon />
          </IconButton>
        }
      >
        <EditRowActions onClick={handleEdit} />
        <DeleteRowAction
          disabled={record?.conciliation}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
        />
      </ConditionContainer>
    </FlexBox>
  );
};
export default memo(ReconciliationAdjustmentActions);
