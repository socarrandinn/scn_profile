import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { useRemoveDispatchSubOrder } from '../../hooks/useRemoveDispatchSubOrder';

type UserStatusProps = {
  rowId: string;
  record: IOrder;
};

const DispatchSubOrderRowActions = ({ rowId, record }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { t } = useTranslation('dispatch');
  const { mutate, isLoading, error } = useRemoveDispatchSubOrder(record?.dispatch as string, rowId, onClose);
  return (
    <>
      <Stack direction='row' spacing={1}>
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
          confirmation={t('confirmationDeleteSubOrder')}
        />
      </Stack>
    </>
  );
};

export default memo(DispatchSubOrderRowActions);
