import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import GeneralInfoForm from 'modules/inventory/product/containers/ProductFormSections/GeneralInfoForm';

type StoreGeneralBasicFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductGeneralBasicForm = ({ error, control, isLoading, onSubmit }: StoreGeneralBasicFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <GeneralInfoForm />
        </Grid>
      </Form>
    </div>
  );
};
export default memo(ProductGeneralBasicForm);
