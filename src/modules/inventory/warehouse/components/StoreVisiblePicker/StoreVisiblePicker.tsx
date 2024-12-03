import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import useStoreUpdateVisible from 'modules/inventory/warehouse/hooks/useStoreUpdateVisible';
import { useTranslation } from 'react-i18next';
import { useVisibilityStatus } from 'modules/inventory/common/hooks/useVisibilityStatus';
import { VISIBILITY_STATUS } from 'modules/inventory/common/constants/visibility-status';

type CategoryVisiblePickerProps = {
  value: boolean;
  rowId: string;
};

const StoreVisiblePicker = ({ value, rowId }: CategoryVisiblePickerProps) => {
  const { t } = useTranslation('warehouse');
  const { updateVisible, isLoading, value: lastValue } = useStoreUpdateVisible(rowId);

  const _value = useVisibilityStatus(value, lastValue);

  return (
    <StatusPicker
      options={VISIBILITY_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
      name='visible'
      value={_value}
      isLoading={isLoading}
      onChange={(status: IStatus) => {
        updateVisible(status?._id === 'true');
      }}
    />
  );
};
export default memo(StoreVisiblePicker);
