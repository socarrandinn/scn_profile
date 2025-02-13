import { memo } from 'react';
import { IProductDiscount } from '../../interfaces';
import { DISCOUNT_TYPE } from '../../constants';

type Props = { data: IProductDiscount };

const ProductDiscountCell = ({ data }: Props) => {
  if (!data?.discountConfig?.value) return <></>;

  return (
    <>
      - {data?.discountConfig?.value}
      {data?.discountConfig?.type === DISCOUNT_TYPE.FIXED ? ' $' : ' %'}
    </>
  );
};

export default memo(ProductDiscountCell);
