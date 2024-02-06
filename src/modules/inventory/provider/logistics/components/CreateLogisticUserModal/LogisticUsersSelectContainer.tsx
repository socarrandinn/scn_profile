import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import SelectLogisticRoles from './SelectLogisticRoles';
import SelectLogistcStores from './SelectLogistcStores';
import { SelectProviderUser } from 'modules/inventory/provider/common/components/SelectProviderUser';

const LogisticUsersSelectContainer = () => {
  const { t } = useTranslation('supplier');

  return (
    <>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <SelectLogisticRoles name='role' multiple={false} label={t('form.role')} placeholder={t('form.selectRole')} />
        </Grid>
        <Grid item xs={12}>
          <SelectLogistcStores
            name='store'
            multiple={false}
            label={t('form.store')}
            placeholder={t('form.selectStore')}
          />
        </Grid>
        <Grid item xs={12}>
          <SelectProviderUser name='users' multiple label={t('form.users')} placeholder={t('form.selectUsers')} />
        </Grid>
      </Grid>
    </>
  );
};

export default LogisticUsersSelectContainer;
