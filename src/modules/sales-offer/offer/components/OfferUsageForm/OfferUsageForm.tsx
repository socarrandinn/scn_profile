import { memo } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';

type OfferUsageFormProps = {
  section: boolean;
};

const OfferUsageForm = ({ section }: OfferUsageFormProps) => {
  const { t } = useTranslation('offerOrder');
  const name = 'rulesUsages';

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <FormTextField name={`${name}.value`} label={t('sections.usage.value')} disabled={!section} type='number' />
      </Grid>
    </Grid>
  );
};

export default memo(OfferUsageForm);
