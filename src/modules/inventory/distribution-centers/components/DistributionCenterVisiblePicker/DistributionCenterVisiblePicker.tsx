import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { CATEGORY_VISIBILITY, CATEGORY_VISIBILITY_MAP } from 'modules/inventory/settings/category/constants';
import useStoreUpdateVisible from 'modules/inventory/warehouse/hooks/useStoreUpdateVisible';
import useDistributionCenterUpdateVisible from '../../hooks/useDistributionCenterUpdateVisible';

type CategoryVisiblePickerProps = {
  value: boolean;
  rowId: string;
};

const DistributionCenterVisiblePicker = ({ value, rowId }: CategoryVisiblePickerProps) => {
  const { updateVisible, isLoading } = useDistributionCenterUpdateVisible(rowId);

  return (
    <StatusPicker
      options={CATEGORY_VISIBILITY}
      name='active'
      size={'small'}
      value={CATEGORY_VISIBILITY_MAP.get(value) as IStatus}
      isLoading={isLoading}
      onChange={() => {
        updateVisible(!value);
      }}
    />
  );
};
export default memo(DistributionCenterVisiblePicker);
