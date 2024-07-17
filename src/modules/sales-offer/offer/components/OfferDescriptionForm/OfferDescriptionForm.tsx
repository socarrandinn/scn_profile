import { memo } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';

const OfferDescriptionForm = () => {
  const { t } = useTranslation('offer');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} rowSpacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12}>
        <FormTextField
          minRows={3}
          multiline
          helperText={t('offer:sections:description:helperText')}
          label={t('offer:sections:description:label')}
          placeholder={t('offer:sections:description:placeholder')}
          name='description'
        />
      </Grid>
      <Grid item xs={12}>
        <FormTextField
          minRows={3}
          multiline
          helperText={t('offer:sections:promotionText:helperText')}
          label={t('offer:sections:promotionText:label')}
          placeholder={t('offer:sections:promotionText:placeholder')}
          name='promotionText'
        />
      </Grid>
      <Grid item xs={12}>
        <FormTextField
          minRows={3}
          multiline
          helperText={t('offer:sections:note:helperText')}
          label={t('offer:sections:note:label')}
          placeholder={t('offer:sections:note:placeholder')}
          name='note'
        />
      </Grid>
    </Grid>
  );
};

export default memo(OfferDescriptionForm);
