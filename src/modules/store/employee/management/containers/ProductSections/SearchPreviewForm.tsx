import { FormTextField, useDFLForm, Small } from '@dfl/mui-react-common';
import { Grid, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';


const SearchPreviewForm = () => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <Small>{t('section.searchPreview.subtitle')}</Small>
      </Grid>
      <Grid item xs={12} md={12}>
        <div></div>
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField fullWidth autoFocus helperText={t('section.searchPreview.labelTextHelper')} name='section.searchPreview.labelTitle' label={t('section.searchPreview.labelTitle')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField fullWidth autoFocus helperText={t('section.searchPreview.descriptionTextHelper')} name='section.searchPreview.labelDescription' label={t('section.searchPreview.labelDescription')} />
      </Grid>
    </Grid>
  );
};

export default SearchPreviewForm;