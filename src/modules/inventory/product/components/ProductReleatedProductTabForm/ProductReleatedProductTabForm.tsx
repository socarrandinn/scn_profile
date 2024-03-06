import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import { TableProvider } from '@dfl/mui-admin-layout';
import RelatedProductsForm from 'modules/inventory/product/containers/ProductFormSections/RelatedProductsForm';
import ReleatedProductListContainer from 'modules/inventory/product/containers/ProductTabs/ReleatedProductListContainer';

type ProductReleatedProductTabFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductReleatedProductTabForm = ({ error, control, isLoading, onSubmit }: ProductReleatedProductTabFormProps) => {
  return (
    <>
      <Box paddingLeft={2}>
        <HandlerError error={error} />
        <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <RelatedProductsForm />
          </Grid>
        </Form>
      </Box>
      <Box marginTop={3}>
        <TableProvider id={'releatedProduct'}>
          <ReleatedProductListContainer />
        </TableProvider>
      </Box>
    </>
  );
};
export default memo(ProductReleatedProductTabForm);
