import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectUser } from 'modules/security/users/components/SelectUser';

const LogisticForm = () => {
  const { t } = useTranslation('store');
  return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
                <SelectUser
                    multiple={false}
                    name={'logistic'}
                    label={t('fields.logistic')}
                    placeholder={t('common:logistic')}
                />
            </Grid>
        </Grid>
  );
};

export default LogisticForm;
