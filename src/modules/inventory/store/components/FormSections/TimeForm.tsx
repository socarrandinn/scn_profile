import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FormTextField } from '@dfl/mui-react-common';

const TimeForm = () => {
  const { t } = useTranslation('store');
  return (
    <FormPaper title={t('section.time.title')}>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <FormTextField
            fullWidth
            name={'time'}
            required
            type={'number'}
            label={t('fields.time')}
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*',
              min: 1,
              // step: 1
            }}
          />
        </Grid>
      </Grid>
    </FormPaper>
  );
};

export default TimeForm;
