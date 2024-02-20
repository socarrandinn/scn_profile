import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import CodeProviderForm from 'modules/inventory/product/containers/ProductFormSections/CodeProviderForm';

type ProductGeneralCodeProviderFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductGeneralCodeProviderForm = ({ error, control, isLoading, onSubmit }: ProductGeneralCodeProviderFormProps) => {
  return (
    <Box paddingLeft={3}>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <CodeProviderForm />
        </Grid>
      </Form>
    </Box>
  );
};
export default memo(ProductGeneralCodeProviderForm);
