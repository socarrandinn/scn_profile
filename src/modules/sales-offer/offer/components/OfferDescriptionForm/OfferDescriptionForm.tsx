import { memo } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';

const OfferDescriptionForm = () => {
  const { t } = useTranslation('offerOrder');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} rowSpacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12}>
        <FormTextField
          minRows={3}
          multiline
          helperText={t('offerOrder:sections:description:helperText')}
          label={t('offerOrder:sections:description:label')}
          placeholder={t('offerOrder:sections:description:placeholder')}
          name='description'
        />
      </Grid>
      <Grid item xs={12}>
        <FormTextField
          minRows={3}
          multiline
          helperText={t('offerOrder:sections:promotionText:helperText')}
          label={t('offerOrder:sections:promotionText:label')}
          placeholder={t('offerOrder:sections:promotionText:placeholder')}
          name='promotionText'
        />
      </Grid>
      <Grid item xs={12}>
        <FormTextField
          minRows={3}
          multiline
          helperText={t('offerOrder:sections:note:helperText')}
          label={t('offerOrder:sections:note:label')}
          placeholder={t('offerOrder:sections:note:placeholder')}
          name='note'
        />
      </Grid>
    </Grid>
  );
};

export default memo(OfferDescriptionForm);
