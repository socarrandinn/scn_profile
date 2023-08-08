import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ProvinceSelect2 } from 'modules/common/components/Address/ProvinceSelect2';

const DeliveryRegionForm = () => {
  const { t } = useTranslation('store');
  return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
                <ProvinceSelect2
                    multiple
                    name={'locations'}
                    label={t('fields.locations')}
                    placeholder={t('common:provincePlaceholder')}
                />
            </Grid>
        </Grid>
  );
};

export default DeliveryRegionForm;
