import { Divider, Stack } from '@mui/material';
import { ProductShippingWeight } from 'modules/inventory/product/components/ProductShippingWeight';
import { ProductShippingSizes } from 'modules/inventory/product/components/ProductShippingSizes';
import SelectProductShippingFree from 'modules/inventory/product/components/SelectProductShippingFree/SelectProductShippingFree';
import { ProductShippingRules } from 'modules/inventory/product/components/ProductShippingRules';
import { SelectProductShippingZones } from 'modules/inventory/product/components/SelectProductShippingZones';

const ShippingInfoForm = ({ handleLimitByOrder, addPlace }: { handleLimitByOrder: any; addPlace: any }) => {
  return (
    <Stack width={'100%'}>
      <Divider/>
      <ProductShippingWeight />
      <Divider/>
      <ProductShippingSizes />
      <Divider />
      <SelectProductShippingZones addPlace={addPlace} />
      <Divider />
      <ProductShippingRules handleLimitByOrder={handleLimitByOrder} />
      <Divider />
      <SelectProductShippingFree />
    </Stack>
  );
};

export default ShippingInfoForm;
