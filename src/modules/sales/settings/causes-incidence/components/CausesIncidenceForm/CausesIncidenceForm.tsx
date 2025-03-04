import { FormEventHandler, memo } from 'react';
import { Form, FormSwitchField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CausesIncidenceTypeSelect } from '../CausesIncidenceTypeSelect';
import { useWatch } from 'react-hook-form';
import CausesIncidenceAudienceAndTemplateInput from '../CausesIncidenceAudienceAndTemplateInput/CausesIncidenceAudienceAndTemplateInput';

type CausesIncidenceFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const CausesIncidenceForm = ({ error, control, isLoading, onSubmit }: CausesIncidenceFormProps) => {
  const { t } = useTranslation('causesIncidence');

  const { hasChildCauses, sendNotification } = useWatch({
    control,
  });

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              multiline
              minRows={3}
              required
              name='description'
              label={t('fields.description')}
            />
          </Grid>

          <Grid item xs={12}>
            <FormSwitchField name='hasChildCauses' label={t('fields.hasChildCauses')} />
          </Grid>
          {hasChildCauses && (
            <Grid item xs={12}>
              <CausesIncidenceTypeSelect multiple required name='childCauses' label={t('fields.childCauses')} />
            </Grid>
          )}
          <Grid item xs={12}>
            <FormSwitchField name='isPublic' label={t('fields.isPublic')} />
            <FormSwitchField name='sendNotification' label={t('fields.sendNotification')} />
          </Grid>

          {/* Display on sendNotification */}
          {sendNotification ? <CausesIncidenceAudienceAndTemplateInput control={control} /> : <></>}
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CausesIncidenceForm);
