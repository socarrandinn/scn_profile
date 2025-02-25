import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import useUpdateProductDiscountEnabled from '../../hooks/useUpdateProductDiscountEnabled';
import { PRODUCT_DISCOUNT_ENABLED, PRODUCT_DISCOUNT_ENABLED_MAP } from '../../constants';
import { Box } from '@mui/material';
import { IProductDiscount } from '../../interfaces';
import { OFFER_STATUS } from 'modules/sales-offer/common/constants/offer.enum';

type OfferProductVisiblePickerProps = {
  value: boolean;
  rowId: string;
  record?: IProductDiscount;
  readOnly?: boolean;
};

const ProductDiscountEnabledPicker = ({ value, rowId, readOnly = false, record }: OfferProductVisiblePickerProps) => {
  const { mutateAsync, isLoading } = useUpdateProductDiscountEnabled(rowId);
  const isFinished = useMemo(() => record?.status === OFFER_STATUS.FINISHED, [record?.status]);

  return (
    <Box
      sx={{
        '& .MuiChip-root': {
          minHeight: 32,
        },
      }}
    >
      <StatusPicker
        readOnly={readOnly || isFinished}
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
