import { FormEventHandler, memo } from 'react';
import { Form, FormSwitchField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type StockReductionCauseFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const StockReductionCauseForm = ({ error, control, isLoading, onSubmit }: StockReductionCauseFormProps) => {
  const { t } = useTranslation('stockReductionCause');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={3} name='description' label={t('fields.description')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormSwitchField name='requiresResponsible' label={t('fields.requiresResponsible')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormSwitchField name='requiresEvidence' label={t('fields.requiresEvidence')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(StockReductionCauseForm);
