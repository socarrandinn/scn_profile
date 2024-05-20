import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { STATIC_SITE_MAP_ITEM_STATUS } from '../../constants/static-site-map-item.status';
import useUpdateStaticSiteMapItemStatus from '../../hooks/useUpdateStaticSiteMapItemStatus';

type StaticSiteMapItemStatusPickerProps = {
  value: IStatus;
  itemId: string;
  statusColor?: string;
  isLoading?: boolean;
  isError?: boolean;
  readOnly?: boolean;
};

const StaticSiteMapItemStatusPicker = ({ value, itemId, readOnly = false }: StaticSiteMapItemStatusPickerProps) => {
  const { t } = useTranslation('product');
  const { mutateAsync, isLoading: loadingChange } = useUpdateStaticSiteMapItemStatus(itemId);

  return (
    <StatusPicker
      readOnly={readOnly}
      options={STATIC_SITE_MAP_ITEM_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{ ...value, title: t(value?.title) }}
      isLoading={loadingChange}
      onChange={(status: IStatus) => mutateAsync(status?._id)}
    />
  );
};

export default memo(StaticSiteMapItemStatusPicker);
