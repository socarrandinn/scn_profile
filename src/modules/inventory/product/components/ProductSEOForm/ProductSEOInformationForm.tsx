import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type ProductSEOInformationFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductSEOInformationForm = ({ error, control, isLoading, onSubmit }: ProductSEOInformationFormProps) => {
  const { t } = useTranslation('product');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={12}>
            <FormTextField
              fullWidth
              helperText={t('section.searchPreview.labelTextHelper')}
              name='seo.name'
              label={t('section.searchPreview.labelTitle')}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <FormTextField
              multiline
              minRows={2}
              fullWidth
              name='seo.description'
              helperText={t('section.searchPreview.descriptionTextHelper')}
              label={t('section.searchPreview.labelDescription')}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(ProductSEOInformationForm);
