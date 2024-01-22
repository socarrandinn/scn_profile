import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type StoreGeneralBasicFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductGeneralBasicForm = ({ error, control, isLoading, onSubmit }: StoreGeneralBasicFormProps) => {
  const { t } = useTranslation('product');
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6}>
            <FormTextField name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField name='brand' label={t('fields.brand')} />
          </Grid>
          <Grid item xs={12} md={12}>
            <FormTextField name='code' label={t('fields.code')} />
          </Grid>
          <Grid item xs={12} md={12}>
            <FormTextField name='description' label={t('fields.description')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(ProductGeneralBasicForm);
