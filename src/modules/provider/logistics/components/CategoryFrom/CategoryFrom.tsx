import { Grid } from '@mui/material';
import { memo } from 'react';
import SelectCategory from 'modules/provider/logistics/components/SelectCategory/SelectCategory';
import { useTranslation } from 'react-i18next';

const CategoryFrom = () => {
  const { t } = useTranslation('logistics');
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <SelectCategory name='categories' label={t('fields.category')} multiple={true}/>
      </Grid>
    </Grid>
  )
}
export default memo(CategoryFrom);
