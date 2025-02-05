import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useWatch } from 'react-hook-form';
import { COLLECTION_CONTENT_TYPE, DYNAMIC_COLLECTION_TYPE } from '../../constants/collection-types';
import { FormDynamicSelect } from '../Fields/FormDynamicSelect';

type CollectionsUpdateTypeFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  setValue: any;
  excludes: DYNAMIC_COLLECTION_TYPE[]
};

const CollectionsUpdateTypeForm = ({
  error,
  control,
  isLoading,
  setValue,
  onSubmit,
  excludes
}: CollectionsUpdateTypeFormProps) => {
  const { t } = useTranslation('collection');
  const contentType = useWatch({ control, name: 'contentType' });
  const type = useWatch({ control, name: 'settings.type' });

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        setValue={setValue}
        control={control}
        isLoading={isLoading}
        id={'collection-type-form'}
        dark
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {[COLLECTION_CONTENT_TYPE.PRODUCT, COLLECTION_CONTENT_TYPE.CATEGORY].includes(contentType) && (
            <>
              <Grid item xs={12}>
                <FormDynamicSelect
                  name='settings.type'
                  label={t('dynamic.title')}
                  contentType={contentType ?? COLLECTION_CONTENT_TYPE.PRODUCT}
                  excludes={excludes}
                />
              </Grid>

              {type !== DYNAMIC_COLLECTION_TYPE.CUSTOM && (
                <>
                  <Grid item xs={12}>
                    <FormTextField name='settings.size' label={t('fields.settings.size')} type='number' />
                  </Grid>
                </>
              )}
            </>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CollectionsUpdateTypeForm);
