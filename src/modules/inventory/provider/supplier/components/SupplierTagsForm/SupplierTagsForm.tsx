import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { ProductKeywordsInput } from 'modules/inventory/product/components/ProductKeywordsInput';

type SupplierTagsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const SupplierTagsForm = ({ error, control, isLoading, onSubmit }: SupplierTagsFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id={'tags-form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <ProductKeywordsInput name='keywords' label='section.summary.organization.labelTags' />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(SupplierTagsForm);
