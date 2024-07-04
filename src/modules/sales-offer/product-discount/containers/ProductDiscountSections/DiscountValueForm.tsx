import { FormDateTimePickerField, FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type DiscountValueFormProps = {
  priceType?: string;
};

const DiscountValueForm = ({ priceType }: DiscountValueFormProps) => {
  const { t } = useTranslation('productDiscount');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormTextField
          fullWidth
          required
          name='discount'
          label={t('fields.discount')}
          size='medium'
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormDateTimePickerField
          fullWidth
          required
          name='startDate'
          label={t('fields.startDate')}
          size='medium'
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormDateTimePickerField
          fullWidth
          required
          name='endDate'
          label={t('fields.endDate')}
          size='medium'
        />
      </Grid>
    </Grid>
  );
};

export default DiscountValueForm;
