import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { CATEGORY_VISIBILITY, CATEGORY_VISIBILITY_MAP } from 'modules/inventory/settings/category/constants';
import useCategoryUpdateVisible from 'modules/inventory/settings/category/hooks/useCategoryUpdateVisible';
import { useTranslation } from 'react-i18next';

type CategoryVisiblePickerProps = {
  value: boolean;
  rowId: string;
};

const CategoryVisiblePicker = ({ value, rowId }: CategoryVisiblePickerProps) => {
  const { t } = useTranslation('category');
  const { updateVisible, isLoading } = useCategoryUpdateVisible(rowId);

  return (
    <StatusPicker
      options={CATEGORY_VISIBILITY}
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
export default memo(CategoryVisiblePicker);
