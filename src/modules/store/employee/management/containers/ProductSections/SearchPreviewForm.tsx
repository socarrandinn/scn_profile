import { Small } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SearchPreview from 'modules/store/employee/management/components/SearchPreview/SearchPreview';

const SearchPreviewForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <Small>{t('section.searchPreview.subtitle')}</Small>
      </Grid>
      <Grid item xs={12} md={12}>
        <SearchPreview />
      </Grid>
    </Grid>
  );
};

export default SearchPreviewForm;
