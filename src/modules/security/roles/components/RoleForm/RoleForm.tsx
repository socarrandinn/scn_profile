import { FormEventHandler, memo } from 'react';
import { Form, FormFontIconPickerLine, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectRoleProviderType } from '../SelectRoleProviderType';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

type RoleFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  type: SPACE_TYPE;
};

const RoleForm = ({ error, control, isLoading, onSubmit, type }: RoleFormProps) => {
  const { t } = useTranslation('role');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-role'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormFontIconPickerLine name='icon' label={t('icon')} bgColor={'error'} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField required fullWidth autoFocus name='name' label={t('name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField required fullWidth multiline minRows={3} name='description' label={t('description')} />
          </Grid>
          {type === SPACE_TYPE.PROVIDER && !isLoading && (
            <Grid item xs={12}>
              <SelectRoleProviderType name={'provider'} label={t('rolType')} required />
            </Grid>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(RoleForm);
