import { FormEventHandler, memo } from 'react';
import { Grid } from '@mui/material';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useWatch } from 'react-hook-form';
import { ProductKeywordsInput } from 'modules/inventory/product/components/ProductKeywordsInput';
import { PRODUCT_FEATURE_TYPE_ENUM } from '../../interfaces/IProductFeature';
import { ProductFeatureTypeSelect } from '../ProductFeatureTypeSelect';
import { FormColorPickerField } from '../field/FormColorField';
import { FormCustomSwitchField } from 'modules/common/components/IphoneSwitchField';

type ProductFeatureFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductFeatureForm = ({ error, control, isLoading, onSubmit }: ProductFeatureFormProps) => {
  const { t } = useTranslation('productFeatures');
  const type = useWatch({ control, name: 'type' }) as PRODUCT_FEATURE_TYPE_ENUM;

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'form-product-features'}
        dark
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <ProductFeatureTypeSelect required name='type' label={t('fields.type')} />
          </Grid>
          {type === PRODUCT_FEATURE_TYPE_ENUM.ARRAY && (
            <>
              <Grid item xs={12}>
                <ProductKeywordsInput name='values' label={t('fields.arrayValue')} />
              </Grid>
              <Grid item xs={12}>
                <FormCustomSwitchField name='isMultiValue' label={t('fields.isMultiValue')} />
              </Grid>
            </>
          )}
          {/* definir componente color */}
          {type === PRODUCT_FEATURE_TYPE_ENUM.COLOR && (
            <>
              <Grid item xs={12}>
                <FormColorPickerField name='values' label={t('fields.arrayValue')} />
              </Grid>
              <Grid item xs={12}>
                <FormCustomSwitchField name='isMultiValue' label={t('fields.isMultiValue')} />
              </Grid>
            </>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(ProductFeatureForm);
