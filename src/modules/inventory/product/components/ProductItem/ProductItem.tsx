import { memo, useMemo } from 'react';
import { LongText } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { IProductSnapShot } from 'modules/sales/common/interfaces/IOrderProductItem';
import { AvatarMedia } from 'components/AvatarMedia';
import { NoFood } from '@mui/icons-material';

const ProductItem = ({ product }: { product: IProductSnapShot | IProduct }) => {
  const productId = useMemo(() => product?.id || product?._id, [product?._id, product?.id]);
  return (
    <Stack gap={1} alignItems={'center'} flexDirection={'row'}>
      <AvatarMedia avatar={product?.media?.[0]} variant={'rounded'}>
        <NoFood fontSize='small' />
      </AvatarMedia>
      <Box>
        <ReactLink to={`/inventory/products/${productId}/general`}>
          <LongText lineClamp={2} text={product.name} />
        </ReactLink>
        <Typography color={'text.secondary'}>{product.code}</Typography>
      </Box>
    </Stack>
  );
};

export default memo(ProductItem);
