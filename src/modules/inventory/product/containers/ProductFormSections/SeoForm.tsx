import { useEffect } from 'react';
import { FormTextField, Small, useDFLForm } from '@dfl/mui-react-common';
import { Grid, InputAdornment } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SeoPreview from 'components/SeoPreview/SeoPreview';

type SeoFormProps = {
  seoTitle?: string;
  seoDescription?: string;
  slugDescription?: string;
  isEdit?: boolean;
  imageSize?: number;
  mobile?: boolean;
};

export const urlBase = 'https://www.bazar24.click/catalog/';

const SeoForm = ({ seoTitle, seoDescription, slugDescription, isEdit, imageSize, mobile }: SeoFormProps) => {
  const { t } = useTranslation('product');
  let urlSlug = urlBase;
  const { watch, setValue } = useDFLForm();
  const title = watch?.('seo.name') || seoTitle;
  const description = watch?.('seo.description') || seoDescription;
  const slugField = urlBase.concat(watch?.('slug') || slugDescription || '');

  useEffect(() => {
    urlSlug = urlSlug.concat(slugField);
    slugField !== urlBase ? setValue?.('slug', slugField) : setValue?.('slug', '');
    // setValue?.('slug', slugField);
  }, [slugField, slugDescription]);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <Small>{t('section.searchPreview.subtitle')}</Small>
      </Grid>
      <Grid item xs={12} md={12}>
        <SeoPreview title={title} description={description} urlSlug={slugField} isEdit={isEdit} imageSize={imageSize} mobile={mobile} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField
          fullWidth
          helperText={t('section.searchPreview.labelTextHelper')}
          name='seo.name'
          label={t('section.searchPreview.labelTitle')}
          size='medium'
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField
          multiline
          minRows={3}
          fullWidth
          name='seo.description'
          helperText={t('section.searchPreview.descriptionTextHelper')}
          label={t('section.searchPreview.labelDescription')}
          size='medium'
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField
          fullWidth
          name='slug'
          helperText={t('section.seo.slugHelperText')}
          label={t('section.seo.slugUrl')}
          size='medium'
          InputProps={{
            startAdornment: <InputAdornment position='start'>{urlBase}</InputAdornment>,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SeoForm;
