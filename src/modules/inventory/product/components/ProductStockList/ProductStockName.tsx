import { memo, FC } from 'react';
import { Stack, styled, Avatar, Typography, StackProps } from '@mui/material';
import { IProduct } from '../../interfaces/IProduct';

export const ProductMedia = styled(Avatar)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
}));

type ProductStockNameProps = StackProps & {
  product: IProduct;
};

const ProductStockName: FC<ProductStockNameProps> = ({ product, ...props }: ProductStockNameProps) => {
  return (
    <Stack flexDirection={'row'} gap={1} {...props}>
      <ProductMedia variant='rounded' src={product?.media?.[0]?.url} alt={product?.name}>
        P
      </ProductMedia>
      <Stack alignItems={'start'}>
        <Typography noWrap fontWeight={600}>
          {typeof product?.name === 'object' ? product?.name?.es : product?.name}
        </Typography>
        <Typography>{product?.code}</Typography>
      </Stack>
    </Stack>
  );
};

export default memo(ProductStockName);
