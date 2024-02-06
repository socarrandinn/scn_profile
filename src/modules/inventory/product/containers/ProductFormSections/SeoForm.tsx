import { FormTextField, Small, useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SeoPreview from 'components/SeoPreview/SeoPreview';

type SeoFormProps = {
  seoTitle?: string;
  seoDescription?: string;
};

const SeoForm = ({ seoTitle, seoDescription }: SeoFormProps) => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();
  const title = watch?.('seo.name') || seoTitle;
  const description = watch?.('seo.description') || seoDescription;

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
          multiline
          minRows={2}
          fullWidth
          name='seo.description'
          helperText={t('section.searchPreview.descriptionTextHelper')}
          label={t('section.searchPreview.labelDescription')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          name='seo.slugUrl'
          helperText={t('section.seo.slugHelperText')}
          label={t('section.seo.slugUrl')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          name='seo.canonicalURL'
          helperText={t('section.seo.canonicalHelperText')}
          label={t('section.seo.canonicalUrl')}
        />
      </Grid>
    </Grid>
  );
};

export default SeoForm;
