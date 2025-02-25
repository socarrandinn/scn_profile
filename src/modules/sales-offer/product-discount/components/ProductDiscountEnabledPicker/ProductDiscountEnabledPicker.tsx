import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import useUpdateProductDiscountEnabled from '../../hooks/useUpdateProductDiscountEnabled';
import { PRODUCT_DISCOUNT_ENABLED, PRODUCT_DISCOUNT_ENABLED_MAP } from '../../constants';
import { Box } from '@mui/material';

type OfferProductVisiblePickerProps = {
  value: boolean;
  rowId: string;
  readOnly?: boolean;
};

const ProductDiscountEnabledPicker = ({ value, rowId, readOnly = false }: OfferProductVisiblePickerProps) => {
  const { mutateAsync, isLoading } = useUpdateProductDiscountEnabled(rowId);

  return (
    <Box
      sx={{
        '& .MuiChip-root': {
          minHeight: 32,
        },
      }}
    >
      <StatusPicker
        readOnly={readOnly}
        options={PRODUCT_DISCOUNT_ENABLED}
        name='active'
        size={'small'}
        value={PRODUCT_DISCOUNT_ENABLED_MAP.get(value) as IStatus}
        isLoading={isLoading}
        onChange={(status: IStatus) => mutateAsync(status?._id === 'true')}
      />
    </Box>
  );
};
export default memo(ProductDiscountEnabledPicker);
