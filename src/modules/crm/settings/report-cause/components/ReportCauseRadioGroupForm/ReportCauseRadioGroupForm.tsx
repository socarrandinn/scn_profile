import { FormEventHandler, memo } from 'react';
import { Form, FormRadioGroupField, HandlerError } from '@dfl/mui-react-common';
import { FormControlLabel, Grid, Radio } from '@mui/material';
import { IReportCause } from '../../interfaces';
import { ReportCauseEmptyList } from '../ReportCauseEmptyList';

type ReportCauseFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  causes: IReportCause[];
};

const ReportCauseForm = ({ error, control, isLoading, onSubmit, causes }: ReportCauseFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'report-cause-form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            {causes?.length === 0 ? (
              <ReportCauseEmptyList />
            ) : (
              <FormRadioGroupField name='cause' defaultChecked>
                {causes?.map((cause) => (
                  <FormControlLabel key={cause?._id} value={cause?._id} control={<Radio />} label={cause?.name} />
                ))}
              </FormRadioGroupField>
            )}
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(ReportCauseForm);
