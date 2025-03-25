import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useWatch } from 'react-hook-form';

import { CausesIncidenceSelect } from '../CausesIncidenceSelect';
import { CAUSE_INCIDENCE_ERRORS } from '../../constants/causes-incidence.errors';

import { FormCustomSwitchField } from 'modules/common/components/IphoneSwitchField';
import AudienceAndTemplateInput from 'modules/sales/settings/common/components/AudienceAndTemplateInput/AudienceAndTemplateInput';
import { INCIDENCE_AUDIENCE_TARGET } from '../../interfaces';

type CausesIncidenceFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const CausesIncidenceForm = ({ error, control, isLoading, onSubmit }: CausesIncidenceFormProps) => {
  const { t } = useTranslation('causesIncidence');

  const { sendNotification } = useWatch({
    control,
  });

  return (
    <div>
      <HandlerError error={error} errors={CAUSE_INCIDENCE_ERRORS} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ pt: 2 }}>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>

          <Grid item xs={12} md={6}>
            <CausesIncidenceSelect name='parent' label={t('fields.parent')} />
          </Grid>

          <Grid item xs={12}>
            <FormTextField
              fullWidth
              multiline
              minRows={5}
              required
              name='description'
              label={t('fields.description')}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormCustomSwitchField name='isPublic' label={t('fields.isPublic')} />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormCustomSwitchField name='requiresEvidence' label={t('fields.requiresEvidence')} />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormCustomSwitchField name='sendNotification' label={t('fields.sendNotification')} />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormCustomSwitchField name='requiresResponsible' label={t('fields.requiresResponsible')} />
          </Grid>
          {/* Display on sendNotification */}
          {sendNotification && (
            <Grid item xs={12}>
              <AudienceAndTemplateInput
                control={control}
                name='notification.audience'
                options={Object.keys(INCIDENCE_AUDIENCE_TARGET)}
              />
            </Grid>
          )}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CausesIncidenceForm);
