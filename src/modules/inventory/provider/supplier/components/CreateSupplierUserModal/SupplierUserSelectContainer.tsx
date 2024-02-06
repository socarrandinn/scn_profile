import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import SelectSupplierRole from './SelectSupplierRole';
import { memo } from 'react';
import { SelectProviderUser } from 'modules/inventory/provider/common/components/SelectProviderUser';

const SupplierUserSelectContainer = () => {
  const { t } = useTranslation('supplier');

  return (
    <>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <SelectSupplierRole name='role' label={t('form.role')} placeholder={t('form.selectRole')} />
        </Grid>
        <Grid item xs={12}>
          <SelectProviderUser name='users' multiple label={t('form.users')} placeholder={t('form.selectUsers')} />
        </Grid>
      </Grid>
    </>
  );
};

export default memo(SupplierUserSelectContainer);
