import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ProvinceSelect2 } from 'modules/common/components/Address/ProvinceSelect2';
import { FormPaper } from 'modules/common/components/FormPaper';

const DeliveryRegionForm = () => {
  const { t } = useTranslation('store');
  return (
        <FormPaper title={t('section.delivery.title')}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                    <ProvinceSelect2
                        multiple
                        name={'locations'}
                        label={`${t('fields.locations')}*`}
                        placeholder={t('common:provincePlaceholder')}
                    />
                </Grid>
            </Grid>
        </FormPaper>
  );
};

export default DeliveryRegionForm;
