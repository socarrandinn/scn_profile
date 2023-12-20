import { memo } from 'react';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import useUpdateProductStatus from '../../hooks/useUpdateProductStatus';
import { PRODUCT_STATUS } from '../../constants/product_status';

type ProductStatusPickerProps = {
  value: IStatus;
  productId: string;
  statusColor?: string;
  isLoading?: boolean;
  isError?: boolean;
};

const ProductStatusPicker = ({ value, productId }: ProductStatusPickerProps) => {
  const { hasPermission } = useSecurity();
  const { mutateAsync, isLoading: loadingChange } = useUpdateProductStatus(productId);

  return (
    <StatusPicker
      readOnly={!hasPermission('PRODUCT_STATUS')}
      options={PRODUCT_STATUS}
      name='active'
      size={'small'}
      value={value}
      isLoading={loadingChange}
      onChange={(status: IStatus) => mutateAsync(status?._id)}
    />
  );
};

export default memo(ProductStatusPicker);
