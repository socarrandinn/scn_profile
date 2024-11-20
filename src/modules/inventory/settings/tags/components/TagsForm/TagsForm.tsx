import { FormEventHandler, memo } from 'react';
import { Form, FormLabel, FormSwitchField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Divider, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TagsTypeSelect } from '../TagsTypeSelect';
import { TagsProviderSelect } from '../TagsProviderSelect';
import { TAG_TYPE_ENUM } from '../../interfaces';
import { FormProductKeyworsField } from 'modules/inventory/product/components/ProductKeywordsImput';

type TagsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  tagType: TAG_TYPE_ENUM;
};

const TagsForm = ({ error, control, isLoading, onSubmit, tagType }: TagsFormProps) => {
  const { t } = useTranslation('tags');

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
          {tagType === TAG_TYPE_ENUM.ARRAY && (
            <Grid item xs={12}>
              <FormProductKeyworsField name='values' label={t('fields.values')} />
            </Grid>
          )}
          <Grid item xs={12} mt={1}>
            <FormLabel label={<Typography fontWeight={800}>{t('requiredIn')}</Typography>}>
              <Divider sx={{ my: 0.5 }} />
            </FormLabel>
          </Grid>
          <Grid item xs={12}>
            <TagsProviderSelect multiple name='isRequiredForProviders' label={t('fields.isRequiredForProviders')} />
          </Grid>
          <Grid item xs={12}>
            <FormSwitchField name='isRequiredForProducts' label={t('fields.isRequiredForProducts')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(TagsForm);
