import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import useUpdateProductStatus from 'modules/inventory/product/hooks/useUpdateProductStatus';
import { PRODUCT_RATE_STATUS, PRODUCT_RATE_STATUS_MAP } from '../../constants/product-rate-status';

type ProductRateDeleteStatusPickerProps = {
  value: boolean;
  rateId: string;
  statusColor?: string;
  isLoading?: boolean;
  isError?: boolean;
};

const ProductRateDeleteStatusPicker = ({ value, rateId }: ProductRateDeleteStatusPickerProps) => {
  const { t } = useTranslation('rate');
  // const { hasPermission } = useSecurity();
  const { updateStatus, isLoading: loadingChange } = useUpdateProductStatus(rateId);

  return (
    <StatusPicker
      readOnly // ={!hasPermission('PRODUCT_WRITE')}
      options={PRODUCT_RATE_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{
        ...(PRODUCT_RATE_STATUS_MAP.get(value) as IStatus),
        title: t(PRODUCT_RATE_STATUS_MAP.get(value)?.title as string),
      }}
      isLoading={loadingChange}
      onChange={() => { updateStatus(!value); }}
    />
  );
};

export default memo(ProductRateDeleteStatusPicker);
