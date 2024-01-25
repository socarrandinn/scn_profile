import { memo, useCallback, useState } from 'react';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { CATEGORY_VISIBILITY, CATEGORY_VISIBILITY_MAP } from 'modules/inventory/settings/category/constants';
import { useTranslation } from 'react-i18next';
import { useUpdateManyCategories } from 'modules/inventory/settings/category/hooks/useUpdateManyCategories';

const CategoryBulkVisiblePicker = () => {
  const [visible, setVisible] = useState(true);

  const { t } = useTranslation('category');

  const { mutate, isLoading } = useUpdateManyCategories();

  const onChange = useCallback(
    (value: IStatus) => {
      setVisible(value._id === 'true');
      mutate(value._id === 'true');
    },
    [mutate],
  );

  return (
    <StatusPicker
      options={CATEGORY_VISIBILITY.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{
        ...(CATEGORY_VISIBILITY_MAP.get(visible) as IStatus),
        title: t(CATEGORY_VISIBILITY_MAP.get(visible)?.title as string),
      }}
      isLoading={isLoading}
      onChange={onChange}
    />
  );
};

export default memo(CategoryBulkVisiblePicker);
