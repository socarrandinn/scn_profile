import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import ProductPerUnitsForm from 'modules/inventory/product/containers/ProductFormSections/ProductPerUnitsForm';

type ProductGeneralPerUnitsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  resetField: any;
};

const ProductGeneralPerUnitsForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  resetField,
}: ProductGeneralPerUnitsFormProps) => {
  return (
    <Box paddingLeft={3}>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <ProductPerUnitsForm typeOfMeasure={''} resetField={resetField} isDisabled={false} />
        </Grid>
      </Form>
    </Box>
  );
};
export default memo(ProductGeneralPerUnitsForm);
