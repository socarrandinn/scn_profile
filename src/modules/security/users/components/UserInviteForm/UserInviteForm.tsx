import { Form, FormSwitchField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { memo } from 'react';
import { SelectEmailUser } from '../SelectUser';
import { SelectProviderType } from 'modules/inventory/provider/common/components/FormSections/SelectProviderType';
import { SelectProviderByType } from 'modules/inventory/provider/common/components/ProviderSelectByType';
import { SelectProviderRole } from 'modules/security/roles/components/SelectProviderRole';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { useTranslation } from 'react-i18next';
import { AdvertisementList } from 'modules/inventory/provider/common/components/FormSections/AddUserForm';
import { SelectStore } from 'modules/inventory/provider/supplier/components/SelectStore';

type UserInviteFormProps = {
  onSubmit: any;
  control: any;
  isLoading: boolean;
  isNationalStore?: boolean;
  providerType: ROLE_PROVIDER_TYPE_ENUM
};

const UserInviteForm = ({ control, isLoading, onSubmit, providerType, isNationalStore }: UserInviteFormProps) => {
  const { t } = useTranslation(['users', 'supplier']);

  return (
    <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'user-provider-form'} dark>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <SelectEmailUser name='email' label={t('common:email')} placeholder='example@gmail.com' />
        </Grid>

        <Grid item xs={12}>
          <SelectProviderType
            name='type'
            required
            label={t('common:provider:select')}
            placeholder={t('common:provider:select')}
          />
        </Grid>

        <Grid item xs={12}>
          <SelectProviderByType name='provider' label={t('common:rolesList')} type={providerType} />
        </Grid>

        <Grid item xs={12}>
          <SelectProviderRole
            name='roles'
            disabled={!providerType}
            multiple
            label={t('roles')}
            placeholder={t('selectRoles')}
            type={providerType}
          />
        </Grid>

        {providerType === ROLE_PROVIDER_TYPE_ENUM.LOGISTIC && (
          <Grid item xs={12}>
            <FormSwitchField sx={{ mb: 1 }} name='isNationalStore' label={t('logistics:fields.national')} />
            {!isNationalStore && (
              <>
                <SelectStore
                  name='store'
                  multiple={false}
                  label={t('supplier:form.store')}
                  placeholder={t('supplier:form.selectStore')}
                />
                <AdvertisementList />
              </>
            )}
          </Grid>
        )}
      </Grid>
    </Form>
  );
};

export default memo(UserInviteForm);
