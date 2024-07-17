import { memo } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormDateTimePickerField } from '@dfl/mui-react-common';

const OfferDateFrom = () => {
  const { t } = useTranslation('offerOrder');

  return (
    <Grid
      container
      spacing={{
        xs: 1,
        md: 2,
      }}
    >
      <Grid item xs={12} md={6}>
        <FormDateTimePickerField label={t('offerOrder:sections:date:fromDate')} name='fromDate' />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDateTimePickerField label={t('offerOrder:sections:date:toDate')} name='toDate' />
      </Grid>
    </Grid>
  );
};

export default memo(OfferDateFrom);
