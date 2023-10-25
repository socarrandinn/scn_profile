import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import productDetailsRoutes from 'modules/inventory/product/routes/product-details';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';

const ProductDetailsContent = () => {
  const { id } = useProductDetail();

  return (
    <Box>
      <RouteLoader routes={productDetailsRoutes} notfoundRedirect={`/rrhh/products/${id}/personal`} />
    </Box>
  );
};

export default memo(ProductDetailsContent);
