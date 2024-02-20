import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const CodeProviderForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField name='codeProductProvider' label={t('section.providerCode.codeProduct')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField name='codeLogisticProvider' label={t('section.providerCode.codeLogistic')} />
      </Grid>
    </Grid>
  );
};

export default memo(CodeProviderForm);
