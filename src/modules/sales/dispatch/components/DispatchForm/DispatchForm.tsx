import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DispatchSummary from '../DispatchSummary/DispatchSummary';
import { useWatch } from 'react-hook-form';

type DispatchFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const DispatchForm = ({ error, control, isLoading, onSubmit }: DispatchFormProps) => {
  const { t } = useTranslation('dispatch');

  const { metrics, _id } = useWatch({ control });

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {!!_id && (
            <Grid item xs={12}>
              <DispatchSummary metrics={metrics}/>
            </Grid>
          )}
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(DispatchForm);
