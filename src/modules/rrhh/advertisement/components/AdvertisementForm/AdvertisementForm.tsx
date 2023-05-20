import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectAdvertisingType } from 'modules/rrhh/advertisement/components/SelectAdvertisingType';
import { SelectAdvertisingAudience } from 'modules/rrhh/advertisement/components/SelectAdvertisingAudience';
import { SelectEmployee } from 'modules/rrhh/employee/management/components/SelectEmployee';
import { TeamSelect } from 'modules/rrhh/team/components/TeamSelect';

type AdvertisementFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  isSpecificAudience?: boolean;
  isTeamsAudience?: boolean;
};

const AdvertisementForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  isSpecificAudience,
  isTeamsAudience,
}: AdvertisementFormProps) => {
  const { t } = useTranslation('advertisement');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'advertising-form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField required fullWidth multiline minRows={3} name='message' label={t('fields.message')} />
          </Grid>
          <Grid item xs={12}>
            <SelectAdvertisingType required name='type' label={t('fields.type')} />
          </Grid>
          <Grid item xs={12}>
            <SelectAdvertisingAudience required name='audience' label={t('fields.audience')} />
          </Grid>
          {isSpecificAudience && (
            <Grid item xs={12}>
              <SelectEmployee
                name='employees'
                multiple
                label={t('fields.employees')}
                placeholder={t('common:firstName')}
              />
            </Grid>
          )}

          {isTeamsAudience && (
            <Grid item xs={12}>
              <TeamSelect multiple name='teams' label={t('fields.teams')} />
            </Grid>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(AdvertisementForm);
