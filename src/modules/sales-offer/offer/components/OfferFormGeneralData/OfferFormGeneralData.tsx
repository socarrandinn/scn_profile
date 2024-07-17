import { memo } from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormDateTimePickerField, FormTextField } from '@dfl/mui-react-common';
import { OfferTypeSelect } from '../OfferTypeSelect';

const OfferFormGeneralData = () => {
  const { t } = useTranslation('offer');

  return (
    <Grid
      container
      spacing={{
        xs: 1,
        md: 2,
      }}
      rowSpacing={{
        xs: 2,
        md: 3,
      }}
    >
      <Grid item xs={12} md={6}>
        <FormTextField label={t('offer:sections:name')} placeholder={t('offer:sections:name')} name='name' />
      </Grid>

      <Grid item xs={12} md={6}>
        <OfferTypeSelect label={t('offer:type')} name='type' />
      </Grid>

      <Grid item xs={12}>
        <Typography variant='h2' color='initial'>
          {t('dateInterval')}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDateTimePickerField label={t('offer:sections:date:fromDate')} name='fromDate' />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDateTimePickerField label={t('offer:sections:date:toDate')} name='toDate' />
      </Grid>
    </Grid>
  );
};

export default memo(OfferFormGeneralData);
