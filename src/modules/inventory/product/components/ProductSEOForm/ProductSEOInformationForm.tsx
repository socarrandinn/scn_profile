import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import SeoForm from 'modules/inventory/product/containers/ProductFormSections/SeoForm';

type ProductSEOInformationFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  seoTitle?: string;
  seoDescription?: string;
};

const ProductSEOInformationForm = ({ error, control, isLoading, onSubmit, seoTitle, seoDescription }: ProductSEOInformationFormProps) => {
  return (
    <Box paddingLeft={3}>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <SeoForm seoTitle={seoTitle} seoDescription={seoDescription}/>
        </Grid>
      </Form>
    </Box>
  );
};
export default memo(ProductSEOInformationForm);
