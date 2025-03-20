import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';
import { LogisticsSelect } from 'modules/inventory/provider/logistics/components/LogisticsSelect';

type Props = {
  disabled?: boolean;
};

const LogisticForm = ({ disabled }: Props) => {
  const { t } = useTranslation('warehouse');

  return (
    <FormPaper nm title={t('section.logistic.title')}>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <LogisticsSelect
            multiple={false}
            name={'logistic'}
            label={t('fields.logistic')}
            placeholder={t('fields.logistic')}
            disabled={disabled}
          />
        </Grid>
      </Grid>
    </FormPaper>
  );
};

export default LogisticForm;
