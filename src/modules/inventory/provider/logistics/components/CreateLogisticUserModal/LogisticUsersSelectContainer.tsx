import { useTranslation } from 'react-i18next';
import { FormControlLabel, Grid, Switch } from '@mui/material';
import SelectLogisticRoles from './SelectLogisticRoles';
import SelectLogistcStores from './SelectLogistcStores';
import { SelectUser } from 'modules/security/users/components/SelectUser';
import { useMemo } from 'react';
import { AdvanceTermFilter, ExistFilter, OperatorFilter } from '@dofleini/query-builder';
import { useToggle } from '@dfl/hook-utils';
import { ConditionContainer } from '@dfl/mui-react-common';

const LogisticUsersSelectContainer = () => {
  const { t } = useTranslation('supplier');
  const { onToggle, isOpen } = useToggle(true);

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
          <SelectLogisticRoles name='role' multiple={false} label={t('form.role')} placeholder={t('form.selectRole')} />
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
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch checked={isOpen} onChange={onToggle} />}
            label={t('logistics:fields.national')}
          />
        </Grid>

        <ConditionContainer active={!isOpen}>
          <Grid item xs={12}>
            <SelectLogistcStores
              name='warehouse'
              multiple={false}
              label={t('form.warehouse')}
              placeholder={t('form.selectWarehouse')}
            />
          </Grid>
        </ConditionContainer>
      </Grid>
    </>
  );
};

export default LogisticUsersSelectContainer;
