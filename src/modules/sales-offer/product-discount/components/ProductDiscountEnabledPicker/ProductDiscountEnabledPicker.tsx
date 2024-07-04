import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import useUpdateProductDiscountEnabled from '../../hooks/useUpdateProductDiscountEnabled';
import { PRODUCT_DISCOUNT_ENABLED, PRODUCT_DISCOUNT_ENABLED_MAP } from '../../constants';

type OfferProductVisiblePickerProps = {
  value: boolean;
  rowId: string;
};

const ProductDiscountEnabledPicker = ({ value, rowId }: OfferProductVisiblePickerProps) => {
  const { mutateAsync, isLoading } = useUpdateProductDiscountEnabled(rowId);

  return (
    <StatusPicker
      options={PRODUCT_DISCOUNT_ENABLED}
      name='active'
      size={'small'}
      value={PRODUCT_DISCOUNT_ENABLED_MAP.get(value) as IStatus}
      isLoading={isLoading}
      onChange={(status: IStatus) => mutateAsync(status?._id === 'true')}
    />
  );
};
export default memo(ProductDiscountEnabledPicker);
