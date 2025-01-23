import { FormEventHandler, memo, useMemo } from 'react';
import { Form, FormSwitchField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormSelectContentType } from '../FormSelectContentType';
import { FormBannerTypeSelect } from '../Fields/FormBannerTypeSelect';
import { useWatch } from 'react-hook-form';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';

type CollectionsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const CollectionsForm = ({ error, control, isLoading, onSubmit }: CollectionsFormProps) => {
  const { t } = useTranslation('collection');
  const contentType = useWatch({ control, name: 'contentType' });

  const isBanner = useMemo(() => contentType === COLLECTION_CONTENT_TYPE.BANNER, [contentType]);
  const isDynamic = useMemo(
    () => [COLLECTION_CONTENT_TYPE.CATEGORY, COLLECTION_CONTENT_TYPE.PRODUCT].includes(contentType),
    [contentType],
  );

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              multiline
              required
              minRows={3}
              name='description'
              label={t('fields.description')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormSelectContentType name='contentType' />
          </Grid>
          {isDynamic && (
            <Grid item xs={12}>
              <FormSwitchField name='isDynamic' label={t('fields.isDynamic')} size='small' />
            </Grid>
          )}
          {isBanner && (
            <Grid item xs={12}>
              <FormBannerTypeSelect name='subType' label={t('fields.subType')} size='small' />
            </Grid>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CollectionsForm);
