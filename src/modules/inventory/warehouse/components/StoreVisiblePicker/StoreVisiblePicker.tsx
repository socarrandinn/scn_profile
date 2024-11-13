import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { CATEGORY_VISIBILITY, CATEGORY_VISIBILITY_MAP } from 'modules/inventory/settings/category/constants';
import useStoreUpdateVisible from 'modules/inventory/warehouse/hooks/useStoreUpdateVisible';

type CategoryVisiblePickerProps = {
  value: boolean;
  rowId: string;
};

const StoreVisiblePicker = ({ value, rowId }: CategoryVisiblePickerProps) => {
  const { updateVisible, isLoading } = useStoreUpdateVisible(rowId);

  return (
    <StatusPicker
      options={CATEGORY_VISIBILITY}
      name='active'
      value={CATEGORY_VISIBILITY_MAP.get(value) as IStatus}
      isLoading={isLoading}
      onChange={() => {
        updateVisible(!value);
      }}
    />
  );
};
export default memo(StoreVisiblePicker);
