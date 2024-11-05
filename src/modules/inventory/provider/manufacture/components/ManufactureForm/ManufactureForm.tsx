import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError, FormSwitchField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormUploadImage } from 'modules/common/components/UploadImage';
import FactoryIcon from '@mui/icons-material/Factory';
import { FormProductKeyworsField } from 'modules/inventory/product/components/ProductKeywordsImput';

type ManufactureFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  withImage?: boolean;
};

const ManufactureForm = ({ error, control, isLoading, onSubmit, withImage = true }: ManufactureFormProps) => {
  const { t } = useTranslation('manufacture');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {withImage && (
            <Grid item xs={12} justifyContent='center' display='flex'>
              <FormUploadImage name={'avatar'} size={100} variant={'rounded'}>
                <FactoryIcon />
              </FormUploadImage>
            </Grid>
          )}
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            {/*  <SelectBand
              name='brand'
              placeholder='Band'
              label={t('fields.band')}
              multiple={true}
              helperText="'Nike', 'Adidas'"
            /> */}
            <FormProductKeyworsField
              /* size='small'  */ name='brand'
              label={t('fields.band')}
              helperText="'Nike', 'Adidas'"
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormProductKeyworsField size='small' name='keywords' label='section.summary.organization.labelTags' />
          </Grid> */}
          <Grid item xs={12}>
            <FormSwitchField name='state' label={t('fields.state')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(ManufactureForm);
