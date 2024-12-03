import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { CATEGORY_VISIBILITY } from 'modules/inventory/settings/category/constants';
import useDistributionCenterUpdateVisible from '../../hooks/useDistributionCenterUpdateVisible';
import { useTranslation } from 'react-i18next';
import { useVisibilityStatus } from 'modules/inventory/common/hooks/useVisibilityStatus';

type CategoryVisiblePickerProps = {
  value: boolean;
  rowId: string;
};

const DistributionCenterVisiblePicker = ({ value, rowId }: CategoryVisiblePickerProps) => {
  const { t } = useTranslation('category');
  const { updateVisible, isLoading, value: lastValue } = useDistributionCenterUpdateVisible(rowId);
  const _value = useVisibilityStatus(value, lastValue);
  return (
    <StatusPicker
      options={CATEGORY_VISIBILITY.map((option) => ({ ...option, title: t(option.title) }))}
      name='visible'
      value={_value}
      size={'small'}
      isLoading={isLoading}
      onChange={(status: IStatus) => {
        updateVisible(status?._id === 'true');
      }}
    />
  );
};
export default memo(DistributionCenterVisiblePicker);
