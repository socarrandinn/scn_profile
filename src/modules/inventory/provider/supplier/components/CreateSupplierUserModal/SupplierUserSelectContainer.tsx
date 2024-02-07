import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import SelectSupplierRole from './SelectSupplierRole';
import { memo, useMemo } from 'react';
import { SelectUser } from 'modules/security/users/components/SelectUser';
import { AdvanceTermFilter, ExistFilter, OperatorFilter } from '@dofleini/query-builder';

const SupplierUserSelectContainer = () => {
  const { t } = useTranslation('supplier');
  const filters = useMemo(
    () =>
      new OperatorFilter({
        type: 'AND',
        filters: [
          new ExistFilter({ field: 'security.roles.provider', value: false }),
          new AdvanceTermFilter({ type: 'NE', field: 'security.roles.isAdmin', value: true }),
        ],
      }),
    [],
  );

  return (
    <>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <SelectSupplierRole name='role' label={t('form.role')} placeholder={t('form.selectRole')} />
        </Grid>
        <Grid item xs={12}>
          <SelectUser
            name='users'
            multiple
            label={t('form.users')}
            placeholder={t('form.selectUsers')}
            fetchOption={{ filters }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default memo(SupplierUserSelectContainer);
