import { Divider, Stack } from '@mui/material';
import { ProductShippingWeight } from 'modules/inventory/product/components/ProductShippingWeight';
import { ProductShippingSizes } from 'modules/inventory/product/components/ProductShippingSizes';
import ProductShippingStatus from '../../components/ProductShippingSizes/ProductShippingStatus';

const ShippingInfoForm = () => {
  return (
    <Stack width={'100%'}>
      <Divider />
      <ProductShippingWeight />
      <Divider />
      <ProductShippingSizes />
      <Divider />
      <ProductShippingStatus />
      {/* <SelectProductShippingFree /> */}
    </Stack>
  );
};

export default ShippingInfoForm;
