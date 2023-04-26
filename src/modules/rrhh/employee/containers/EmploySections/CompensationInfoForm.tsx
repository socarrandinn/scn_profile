import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';
import SelectCompensationType from 'modules/rrhh/employee/components/SelectCompensationType/SelectCompensationType';
import SelectPaymentType from 'modules/rrhh/employee/components/SelectPaymentType/SelectPaymentType';
import SelectFrequency from 'modules/rrhh/employee/components/SelectFrequency/SelectFrequency';

const CompensationInfoForm = () => {
  const { t } = useTranslation('employee');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <SelectCompensationType
            required
            name='compensation.type'
            label={t('fields.compensation.type')}
            />
      </Grid>
        <Grid item xs={12}>
            <SelectPaymentType
                required
                name='compensation.paymentType'
                label={t('fields.compensation.paymentType')}
            />
        </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth required name='compensation.value' label={t('fields.compensation.value')} />
      </Grid>
        <Grid item xs={12}>
            <SelectFrequency
                required
                name='compensation.frequency'
                label={t('fields.compensation.frequency')}
            />
        </Grid>
        <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={3} name='compensation.notes' label={t('fields.compensation.notes')}/>
        </Grid>
    </Grid>
  );
};

export default CompensationInfoForm;
