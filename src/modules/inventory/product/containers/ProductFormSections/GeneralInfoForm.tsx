import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormTinyMceEditorField } from 'components/TinyMceEditor';

const GeneralInfoForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth required name='brand' label={t('fields.brand')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth required name='code' label={t('fields.code')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField fullWidth name='referenceCode' label={t('fields.referenceCode')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField fullWidth name='barcode' label={t('fields.barcode')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTinyMceEditorField required name='description' label={t('fields.description')} />
      </Grid>
    </Grid>
  );
};

export default GeneralInfoForm;
