import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import ProductOrganizationForm from 'modules/inventory/product/containers/ProductFormSections/ProductOrganizationForm';

type ProductGeneralOrganizationFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductGeneralOrganizationForm = ({
  error,
  control,
  isLoading,
  onSubmit,
}: ProductGeneralOrganizationFormProps) => {
  return (
    <Box paddingLeft={3}>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <ProductOrganizationForm isEdit/>
        </Grid>
      </Form>
    </Box>
  );
};
export default memo(ProductGeneralOrganizationForm);
