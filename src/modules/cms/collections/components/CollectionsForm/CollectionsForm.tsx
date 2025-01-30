import { FormEventHandler, memo } from 'react';
import { Form, FormRadioGroupField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { FormControlLabel, Grid, Radio } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormBannerTypeSelect } from '../Fields/FormBannerTypeSelect';
import { useWatch } from 'react-hook-form';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import { FormPositionSelect } from '../Fields/FormPositionSelect';
import { FormDynamicSelect } from '../Fields/FormDynamicSelect';

type CollectionsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  setValue: any;
};

const CollectionsForm = ({ error, control, isLoading, setValue, onSubmit }: CollectionsFormProps) => {
  const { t } = useTranslation('collection');
  const contentType = useWatch({ control, name: 'contentType' });
  const isDynamic = useWatch({ control, name: 'isDynamic' });

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        setValue={setValue}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'form'}
        dark
      >
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
          {/*  <Grid item xs={12}>
            <FormSelectContentType
              name='contentType'
              label={t('fields.contentType')}
              onChange={() => {
                setValue?.('position', null);
              }}
            />
          </Grid> */}

          {contentType === COLLECTION_CONTENT_TYPE.BANNER && (
            <Grid item xs={12}>
              <FormBannerTypeSelect name='subType' label={t('fields.subType')} />
            </Grid>
          )}

          {/* position by collection: BANNER, PRODUCT */}
          {[COLLECTION_CONTENT_TYPE.BANNER, COLLECTION_CONTENT_TYPE.PRODUCT].includes(contentType) && (
            <Grid item xs={12}>
              <FormPositionSelect
                key={contentType}
                name='position'
                label={t('fields.position')}
                contentType={contentType ?? COLLECTION_CONTENT_TYPE.BANNER}
              />
            </Grid>
          )}

          {[COLLECTION_CONTENT_TYPE.PRODUCT, COLLECTION_CONTENT_TYPE.CATEGORY].includes(contentType) && (
            <>
              <Grid item xs={12}>
                <FormRadioGroupField name='isDynamic' id='isDynamic' row>
                  <FormControlLabel value={false} control={<Radio />} label={t('fields.isDynamic.manual')} />
                  <FormControlLabel value={true} control={<Radio />} label={t('fields.isDynamic.dynamic')} />
                </FormRadioGroupField>
              </Grid>

              {[true, 'true'].includes(isDynamic) && (
                <Grid item xs={12}>
                  <FormDynamicSelect
                    name='dynamic'
                    label={t('dynamic.title')}
                    contentType={contentType ?? COLLECTION_CONTENT_TYPE.PRODUCT}
                  />
                </Grid>
              )}
            </>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CollectionsForm);
