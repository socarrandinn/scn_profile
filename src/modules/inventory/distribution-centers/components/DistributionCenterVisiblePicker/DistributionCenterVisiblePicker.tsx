import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { CATEGORY_VISIBILITY, CATEGORY_VISIBILITY_MAP } from 'modules/inventory/settings/category/constants';
import useDistributionCenterUpdateVisible from '../../hooks/useDistributionCenterUpdateVisible';
import { useTranslation } from 'react-i18next';

type CategoryVisiblePickerProps = {
  value: boolean;
  rowId: string;
};

const DistributionCenterVisiblePicker = ({ value, rowId }: CategoryVisiblePickerProps) => {
  const { t } = useTranslation('category');
  const { updateVisible, isLoading } = useDistributionCenterUpdateVisible(rowId);

  return (
    <StatusPicker
      options={CATEGORY_VISIBILITY.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{
        ...(CATEGORY_VISIBILITY_MAP.get(value) as IStatus),
        title: t(CATEGORY_VISIBILITY_MAP.get(value)?.title as string),
      }}
      isLoading={isLoading}
      onChange={() => {
        updateVisible(!value);
      }}
    />
  );
};
export default memo(DistributionCenterVisiblePicker);
