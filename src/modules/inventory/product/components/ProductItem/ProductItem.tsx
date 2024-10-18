import { memo, useMemo } from 'react';
import { FlexBox, LongText } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { IProductSnapShot } from 'modules/sales/common/interfaces/IOrderProductItem';

const getMedia = (product: IProductSnapShot | IProduct) => {
  if (product?.media?.length) return <img src={product?.media?.[0]?.thumb} alt='' />;
  return <PhotoSizeSelectActualOutlinedIcon />;
};

const ProductItem = ({ product }: { product: IProductSnapShot | IProduct }) => {
  const productId = useMemo(() => product?.id || product?._id, [product?._id, product?.id]);
  return (
    <FlexBox alignItems={'center'}>
      <Box maxWidth={52} mr={2}>
        {getMedia(product)}
      </Box>
      <Box>
        <ReactLink to={`/inventory/products/${productId}/general`}>
          <LongText lineClamp={2} text={product.name} />
        </ReactLink>
        <Typography color={'text.secondary'}>{product.code}</Typography>
      </Box>
    </FlexBox>
  );
};

export default memo(ProductItem);
