import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import PricesForm from 'modules/inventory/product/containers/ProductFormSections/PricesForm';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';

type ProductPriceTabFormFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  logisticPriceType?: string;
  shippingPriceType?: string;
  commercialPriceType?: string;
  otherCostPriceType?: string;
  editFinalPrice?: number;
};

const ProductPriceTabFormForm = ({
  logisticPriceType,
  shippingPriceType,
  commercialPriceType,
  otherCostPriceType,
  editFinalPrice,
  error,
  control,
  isLoading,
  onSubmit,
}: ProductPriceTabFormFormProps) => {
  const { product } = useProductDetail();
  return (
    <Box paddingLeft={3}>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <PricesForm
            logisticPriceType={logisticPriceType}
            shippingPriceType={shippingPriceType}
            commercialPriceType={commercialPriceType}
            otherCostPriceType={otherCostPriceType}
            editFinalPrice={editFinalPrice}
            priceDetails={product?.priceDetails}
          />
        </Grid>
      </Form>
    </Box>
  );
};
export default memo(ProductPriceTabFormForm);
