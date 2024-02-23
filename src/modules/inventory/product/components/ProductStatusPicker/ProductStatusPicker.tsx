import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import useUpdateProductStatus from 'modules/inventory/product/hooks/useUpdateProductStatus';
import { PRODUCT_STATUS } from 'modules/inventory/product/constants/product_status';

type ProductStatusPickerProps = {
  value: IStatus;
  productId: string;
  statusColor?: string;
  isLoading?: boolean;
  isError?: boolean;
};

const ProductStatusPicker = ({ value, productId }: ProductStatusPickerProps) => {
  const { t } = useTranslation('product');
  const { hasPermission } = useSecurity();
  const { mutateAsync, isLoading: loadingChange } = useUpdateProductStatus(productId);

  return (
    <StatusPicker
      readOnly={!hasPermission('PRODUCT_STATUS')}
      options={PRODUCT_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{ ...value, title: t(value?.title) }}
      isLoading={loadingChange}
      onChange={(status: IStatus) => mutateAsync(status?._id)}
    />
  );
};

export default memo(ProductStatusPicker);
