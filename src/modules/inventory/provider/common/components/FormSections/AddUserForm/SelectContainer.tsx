import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import { SelectStore } from 'modules/inventory/provider/supplier/components/SelectStore';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import { SelectUser } from 'modules/security/users/components/SelectUser';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

const SelectContainer = () => {
  const { t } = useTranslation('supplier');

  return (
    <>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <SelectRole
            name='role'
            multiple={false}
            label={t('form.role')}
            placeholder={t('form.selectRole')}
            type={ROLE_TYPE_ENUM.ROOT}
          />
        </Grid>
        <Grid item xs={12}>
          <SelectStore
            name='warehouse'
            multiple={false}
            label={t('form.warehouse')}
            placeholder={t('form.selectWarehouse')}
          />
        </Grid>
        <Grid item xs={12}>
          <SelectUser name='users' multiple label={t('form.users')} placeholder={t('form.selectUsers')} />
        </Grid>
      </Grid>
    </>
  );
};

export default SelectContainer;
