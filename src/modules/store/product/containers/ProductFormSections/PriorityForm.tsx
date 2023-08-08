import { Span } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PriorityProduct from 'modules/store/product/components/PriorityProduct/PriorityProduct';
import { FieldValues, Control } from 'react-hook-form';

type props = {
  control: Control<FieldValues>;
};

const PriorityForm = ({ control }: props) => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <PriorityProduct control={control} />
      </Grid>
      <Grid item xs={12} md={12}>
        <Span>
        {t('section.summary.priority.textHelper')}
        </Span>
      </Grid>
    </Grid>
  );
};

export default PriorityForm;
