import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo, useCallback, useMemo } from 'react';
import { CATEGORY_VISIBILITY, CATEGORY_VISIBILITY_MAP } from 'modules/inventory/settings/category/constants';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { ConfirmAction } from 'components/ConfirmAction';
import { IWarehouseSupplier } from '../../interfaces/IWarehouseSupplier';
import useWarehouseSupplierUpdateVisibility from '../../hooks/useWarehouseSupplierUpdateVisibility';
import { IWarehouse } from '../../interfaces';

type WarehouseSupplierStatePickerProps = {
  value: boolean;
  rowId: string;
  record: IWarehouseSupplier;
};

const WarehouseSupplierStatePicker = ({ value, rowId, record }: WarehouseSupplierStatePickerProps) => {
  const { t } = useTranslation('provider');
  const { isOpen, onOpen, onClose } = useToggle();
  const warehouse = useMemo(() => record?.warehouse as IWarehouse, [record?.warehouse]);
  const { mutate, isLoading } = useWarehouseSupplierUpdateVisibility(warehouse?._id as string, rowId, onClose);

  const handleConfirm = useCallback(() => {
    mutate(!value);
  }, [mutate, value]);

  return (
    <>
      <StatusPicker
        options={CATEGORY_VISIBILITY.map((option) => ({ ...option, title: t(option.title) }))}
        name='active'
        size={'small'}
        value={{
          ...(CATEGORY_VISIBILITY_MAP.get(value) as IStatus),
          title: t(CATEGORY_VISIBILITY_MAP.get(value)?.title as string),
        }}
        isLoading={isLoading}
        onChange={onOpen}
      />
      <ConfirmAction
        open={isOpen}
        onClose={onClose}
        onConfirm={handleConfirm}
        isLoading={isLoading}
        title={t('updateVisibility.title', { providerName: record?.supplier?.name })}
        confirmation={t('updateVisibility.description')}
      />
    </>
  );
};
export default memo(WarehouseSupplierStatePicker);
