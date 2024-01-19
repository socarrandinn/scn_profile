import { FormEventHandler, memo } from 'react';
import { Form, FormSwitchField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SupplierSelect } from 'modules/inventory/provider/supplier/components/SupplierSelect';
import { CategorySelect } from 'modules/inventory/settings/category/components/CategorySelect';
import { FormTagListField } from 'components/TagListInput';

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
  const { t } = useTranslation('product');
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6}>
            <CategorySelect name={'category'} label={t('fields.category')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SupplierSelect name='providers.supplier' label={t('fields.supplier')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTagListField name='keywords' label={t('fields.keywords')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormSwitchField name='visible' label={t('fields.visibility')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(ProductGeneralOrganizationForm);
