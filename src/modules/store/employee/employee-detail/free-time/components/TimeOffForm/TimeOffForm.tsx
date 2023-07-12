import { FormEventHandler, memo } from 'react';
import { Form, FormDatePickerField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PolicySelect } from '../PolicySelect';
import { TIME_OFF_ERRORS } from 'modules/store/employee/employee-detail/free-time/constants/timeoff.errors';

type FormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const TimeOffForm = ({ error, control, isLoading, onSubmit }: FormProps) => {
  const { t } = useTranslation('employee');

  return (
    <div>
      <HandlerError error={error} errors={TIME_OFF_ERRORS}/>
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <PolicySelect name='policy' label={t('fields.freeTime.policy')} required/>
          </Grid>
          <Grid item xs={6}>
            <FormDatePickerField name='startDate' label={t('fields.freeTime.startDate')} required />
          </Grid>
          <Grid item xs={6}>
            <FormDatePickerField name='endDate' label={t('fields.freeTime.endDate')} required/>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(TimeOffForm);
