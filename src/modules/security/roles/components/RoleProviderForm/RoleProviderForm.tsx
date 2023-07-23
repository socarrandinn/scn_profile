import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectRoleProviderType } from '../SelectRoleProviderType';

type RoleProviderFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const RoleProviderForm = ({ error, control, isLoading, onSubmit }: RoleProviderFormProps) => {
  const { t } = useTranslation('role');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-role-provider'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField required fullWidth autoFocus name='name' label={t('name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField required fullWidth multiline minRows={3} name='description' label={t('description')} />
          </Grid>
          <Grid item xs={12}>
            <SelectRoleProviderType name={'type'} label={'Tipo de rol'} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(RoleProviderForm);
