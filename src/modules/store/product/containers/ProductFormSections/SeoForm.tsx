import { FormTextField, Small, useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SeoPreview from 'components/SeoPreview/SeoPreview';

const SeoForm = () => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();
  const title = watch?.('seo.name');
  const description = watch?.('seo.description');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <Small>{t('section.searchPreview.subtitle')}</Small>
      </Grid>
      <Grid item xs={12} md={12}>
        <SeoPreview title={title} description={description} />
      </Grid>
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
          fullWidth
          name='seo.description'
          helperText={t('section.searchPreview.descriptionTextHelper')}
          label={t('section.searchPreview.labelDescription')}
        />
      </Grid>
    </Grid>
  );
};

export default SeoForm;
