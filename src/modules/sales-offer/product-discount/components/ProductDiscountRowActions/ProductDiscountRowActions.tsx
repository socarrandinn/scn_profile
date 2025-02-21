import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { Stack } from '@mui/material';
import { useDeleteProductDiscount } from 'modules/sales-offer/product-discount/hooks/useDeleteProductDiscount';
import { memo } from 'react';
import { IProductDiscount } from '../../interfaces';
import { OFFER_STATUS } from 'modules/sales-offer/common/constants/offer.enum';

type Props = {
  data: IProductDiscount;
};

const ProductDiscountRowActions = ({ data }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteProductDiscount(data?._id as string, onClose);

  return (
    <>
      <Stack direction='row' spacing={1}>
        <DeleteRowAction
          disabled={data?.status === OFFER_STATUS.ACTIVE}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
        />
      </Stack>
    </>
  );
};

export default memo(ProductDiscountRowActions);
