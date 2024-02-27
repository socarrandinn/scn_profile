import { Divider, Stack } from '@mui/material';
import { ProductShippingWeight } from 'modules/inventory/product/components/ProductShippingWeight';
import { ProductShippingSizes } from 'modules/inventory/product/components/ProductShippingSizes';
import SelectProductShippingFree from 'modules/inventory/product/components/SelectProductShippingFree/SelectProductShippingFree';
import { ProductShippingRules } from 'modules/inventory/product/components/ProductShippingRules';
import { SelectProductShippingZones } from 'modules/inventory/product/components/SelectProductShippingZones';

type ShippingInfoFormProps = {
  handleLimitByOrder: any;
  addPlace: any;
  provinceInEdit?: string;
  municipalityInEdit?: string;
};

const ShippingInfoForm = ({
  provinceInEdit,
  municipalityInEdit,
  handleLimitByOrder,
  addPlace,
}: ShippingInfoFormProps) => {
  return (
    <Stack width={'100%'}>
      <Divider />
      <ProductShippingWeight />
      <Divider />
      <ProductShippingSizes />
      <Divider />
      <SelectProductShippingZones
        addPlace={addPlace}
        provinceInEdit={provinceInEdit}
        municipalityInEdit={municipalityInEdit}
      />
      <Divider />
      <ProductShippingRules handleLimitByOrder={handleLimitByOrder} />
      <Divider />
      <SelectProductShippingFree />
    </Stack>
  );
};

export default ShippingInfoForm;
