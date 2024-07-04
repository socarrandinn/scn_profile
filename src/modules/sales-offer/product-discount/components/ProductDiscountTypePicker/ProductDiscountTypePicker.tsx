import { memo } from 'react'
import useUpdateProductDiscountType from '../../hooks/useUpdateProductDiscountType';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { PRODUCT_DISCOUNT_TYPE, PRODUCT_DISCOUNT_TYPE_MAP } from '../../constants';
import { useSecurity } from '@dfl/react-security';

type ProductDiscountTypePickerProps = { value: string, rowId: string | undefined }

const ProductDiscountTypePicker = ({ value, rowId }: ProductDiscountTypePickerProps) => {
  const { hasPermission } = useSecurity();
  const { mutateAsync, isLoading } = useUpdateProductDiscountType(rowId as string);

  return (<>
    <StatusPicker
      readOnly={!hasPermission('PRODUCT_STATUS')}
      options={PRODUCT_DISCOUNT_TYPE}
      name='active'
      size={'small'}
      value={PRODUCT_DISCOUNT_TYPE_MAP.get(value) as IStatus}
      isLoading={isLoading}
      onChange={(status: IStatus) => mutateAsync(status?._id)}
    />
  </>)
}

export default memo(ProductDiscountTypePicker)
