import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import EstimatedTimeForm from 'modules/inventory/product/containers/ProductFormSections/EstimatedTimeForm';

type ProductGeneralEstimatedTimeFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductGeneralEstimatedTimeForm = ({
  error,
  control,
  isLoading,
  onSubmit,
}: ProductGeneralEstimatedTimeFormProps) => {
  return (
    <Box paddingLeft={3}>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'product-estimated-time-form'}
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <EstimatedTimeForm />
        </Grid>
      </Form>
    </Box>
  );
};
export default memo(ProductGeneralEstimatedTimeForm);
