import { Form } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { memo } from 'react';
import { SelectProviderRole } from 'modules/security/roles/components/SelectProviderRole';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { useTranslation } from 'react-i18next';
import { SelectEmailUser } from 'modules/security/users/components/SelectUser';
import { useWatch } from 'react-hook-form';
import { SelectProviderByType } from 'modules/inventory/provider/common/components/ProviderSelectByType';
import { ProviderTypeSelect } from 'modules/inventory/provider/common/components/ProviderTypeSelect';

type ProviderUserInviteFormProps = {
  onSubmit: any;
  control: any;
  isLoading: boolean;
};

const ProviderUserInviteForm = ({ control, isLoading, onSubmit }: ProviderUserInviteFormProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  const { type, provider } = useWatch({ control });
  return (
    <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'user-invite-form'} dark>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <SelectEmailUser name='email' label={t('common:email')} placeholder='example@gmail.com' />
        </Grid>

        <Grid item xs={12}>
          <ProviderTypeSelect name='type' label={t('common:provider.type')} />
        </Grid>

        {type && (
          <>
            <Grid item xs={12}>
              <SelectProviderByType
                name='provider'
                label={t('common:provider.title')}
                placeholder={t('common:provider.select')}
                type={type || ROLE_PROVIDER_TYPE_ENUM.LOGISTIC}
              />
            </Grid>

            {provider && (
              <Grid item xs={12}>
                <SelectProviderRole
                  name='security.roles'
                  multiple
                  label={t('roles')}
                  placeholder={t('selectRoles')}
                  type={type || ROLE_PROVIDER_TYPE_ENUM.LOGISTIC}
                />
              </Grid>
            )}
          </>
        )}
      </Grid>
    </Form>
  );
};

export default memo(ProviderUserInviteForm);
