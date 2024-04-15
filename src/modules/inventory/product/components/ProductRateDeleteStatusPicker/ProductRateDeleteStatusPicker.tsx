import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import useUpdateProductStatus from 'modules/inventory/product/hooks/useUpdateProductStatus';
import { PRODUCT_RATE_STATUS } from '../../constants/product-rate-status';

type ProductRateDeleteStatusPickerProps = {
  value: IStatus;
  rateId: string;
  statusColor?: string;
  isLoading?: boolean;
  isError?: boolean;
};

const ProductRateDeleteStatusPicker = ({ value, rateId }: ProductRateDeleteStatusPickerProps) => {
  const { t } = useTranslation('rate');
  // const { hasPermission } = useSecurity();
  const { mutateAsync, isLoading: loadingChange } = useUpdateProductStatus(rateId);

  return (
    <StatusPicker
      readOnly // ={!hasPermission('PRODUCT_WRITE')}
      options={PRODUCT_RATE_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{ ...value, title: t(value?.title) }}
      isLoading={loadingChange}
      onChange={(status: IStatus) => mutateAsync(status?._id)}
    />
  );
};

export default memo(ProductRateDeleteStatusPicker);
