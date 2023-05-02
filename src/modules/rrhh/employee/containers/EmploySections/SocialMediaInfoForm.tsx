import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';

const SocialMediaInfoForm = () => {
  const { t } = useTranslation('employee');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          name='social.facebook'
          label={t('fields.social.facebook')}
          placeholder={t('fields.social.facebookPlaceholder')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          name='social.instagram'
          label={t('fields.social.instagram')}
          placeholder={t('fields.social.linkendinPlaceholder')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          name='social.linkendin'
          label={t('fields.social.linkendin')}
          placeholder={t('fields.social.linkendinPlaceholder')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          name='social.twitter'
          label={t('fields.social.twitter')}
          placeholder={t('fields.social.twitterPlaceholder')}
        />
      </Grid>
    </Grid>
  );
};

export default SocialMediaInfoForm;
