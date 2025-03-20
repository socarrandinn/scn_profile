import { Grid } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import FormDiscountField from 'modules/inventory/product/components/FormDiscountField/FormDiscountField';
import { PRICE_TYPE } from '../../constants/price-type.enum';

type Props = {
  initPriceType?: PRICE_TYPE;
};

const ManipulationCommissionForm = ({ initPriceType }: Props) => {
  const { t } = useTranslation('distributionCenters');
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <FormDiscountField
          initPriceType={initPriceType}
          fullWidth
          required
          name='handlingCost'
          label={t('handlingCost.title')}
          size='medium'
        />
      </Grid>
    </Grid>
  );
};

export default memo(ManipulationCommissionForm);
