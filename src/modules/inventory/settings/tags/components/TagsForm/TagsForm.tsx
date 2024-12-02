import { FormEventHandler, memo } from 'react';
import { Form, FormLabel, FormSwitchField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Divider, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TagsTypeSelect } from '../TagsTypeSelect';
import { TAG_TYPE_ENUM } from '../../interfaces';
import { useWatch } from 'react-hook-form';
import { ProductKeywordsInput } from 'modules/inventory/product/components/ProductKeywordsInput';

type TagsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const TagsForm = ({ error, control, isLoading, onSubmit }: TagsFormProps) => {
  const { t } = useTranslation('tags');
  const type = useWatch({ control, name: 'type' }) as TAG_TYPE_ENUM;

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <TagsTypeSelect required name='type' label={t('fields.type')} />
          </Grid>
          {type === TAG_TYPE_ENUM.ARRAY && (
            <>
              <Grid item xs={12}>
                <ProductKeywordsInput name='values' label={t('fields.arrayValue')} />
              </Grid>
              <Grid item xs={12}>
                <FormSwitchField name='isMultiValue' label={t('fields.isMultiValue')} />
              </Grid>
            </>
          )}
          <Grid item xs={12} mt={1}>
            <FormLabel label={<Typography fontWeight={800}>{t('requiredIn')}</Typography>}>
              <Divider sx={{ my: 0.5 }} />
            </FormLabel>
          </Grid>
          <Grid item xs={12}>
            <FormSwitchField name='rules.product.required' label={t('fields.rules.product')} />
          </Grid>
          <Grid item xs={12}>
            <FormSwitchField name='rules.supplier.required' label={t('fields.rules.supplier')} />
          </Grid>
          <Grid item xs={12}>
            <FormSwitchField name='rules.logistic.required' label={t('fields.rules.logistic')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(TagsForm);
