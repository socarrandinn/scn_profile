import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import { SelectStore } from 'modules/inventory/provider/supplier/components/SelectStore';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import { SelectUser } from 'modules/security/users/components/SelectUser';

const SelectContainer = () => {
  const { t } = useTranslation('supplier');

  return (
    <>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <SelectRole name='role' multiple={false} label={t('form.role')} placeholder={t('form.selectRole')} />
        </Grid>
        <Grid item xs={12}>
          <SelectStore name='store' multiple={false} label={t('form.store')} placeholder={t('form.selectStore')} />
        </Grid>
        <Grid item xs={12}>
          <SelectUser name='users' multiple label={t('form.users')} placeholder={t('form.selectUsers')} />
        </Grid>
      </Grid>
    </>
  );
};

export default SelectContainer;
