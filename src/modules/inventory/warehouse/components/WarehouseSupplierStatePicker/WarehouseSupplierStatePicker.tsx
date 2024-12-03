import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IWarehouseSupplier } from '../../interfaces/IWarehouseSupplier';
import useWarehouseSupplierUpdateVisibility from '../../hooks/useWarehouseSupplierUpdateVisibility';
import { IWarehouse } from '../../interfaces';
import { useVisibilityStatus } from 'modules/inventory/common/hooks/useVisibilityStatus';
import { VISIBILITY_STATUS } from 'modules/inventory/common/constants/visibility-status';

type WarehouseSupplierStatePickerProps = {
  value: boolean;
  rowId: string;
  record: IWarehouseSupplier;
};

const WarehouseSupplierStatePicker = ({ value, rowId, record }: WarehouseSupplierStatePickerProps) => {
  const { t } = useTranslation('provider');
  // const { isOpen, onOpen, onClose } = useToggle();
  const warehouse = useMemo(() => record?.warehouse as IWarehouse, [record?.warehouse]);
  const { mutateAsync, isLoading, data } = useWarehouseSupplierUpdateVisibility(warehouse?._id as string, rowId);
  const _value = useVisibilityStatus(value, data?.data?.visible);
  /* const handleConfirm = useCallback(() => {
    mutate(!value);
  }, [mutate, value]); */

  return (
    <>
      <StatusPicker
        options={VISIBILITY_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
        name='visible'
        value={_value}
        size={'small'}
        isLoading={isLoading}
        onChange={(status: IStatus) => {
          mutateAsync(status?._id === 'true');
        }}
      />
      {/*  <ConfirmAction
        open={isOpen}
        onClose={onClose}
        onConfirm={handleConfirm}
        isLoading={isLoading}
        title={t('updateVisibility.title', { providerName: record?.supplier?.name })}
        confirmation={t('updateVisibility.description')}
      /> */}
    </>
  );
};
export default memo(WarehouseSupplierStatePicker);
