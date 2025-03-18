import { memo } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';

type OfferClientUsageFromProps = {
  section: boolean;
};

const OfferClientUsageFrom = ({ section }: OfferClientUsageFromProps) => {
  const name = 'rulesClientUsage';
  const { t } = useTranslation('offerOrder');
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <FormTextField
          name={`${name}.value`}
          label={t('sections.clientUsage.value')}
          disabled={!section}
          type='number'
        />
      </Grid>
    </Grid>
  );
};

export default memo(OfferClientUsageFrom);
