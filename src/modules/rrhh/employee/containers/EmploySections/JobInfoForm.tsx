import { FormControlLabel, Grid, Radio } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormDatePickerField, FormRadioGroupField, FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { SelectJobPosition } from 'modules/rrhh/settings/job-position/components/SelectJobPosition';
import { SelectWorkLocation } from 'modules/rrhh/settings/work-location/components/SelectWorkLocation';
import { SelectEmployee } from 'modules/rrhh/employee/components/SelectEmployee';
import { SelectEngagement } from 'modules/rrhh/employee/components/SelectEngagement';

const JobInfoForm = () => {
  const { t } = useTranslation('employee');
  const { watch } = useDFLForm();
  const recommended = watch?.('hiring.recommended');
  const isRecommended = recommended === 'recommended';

  return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
                <FormRadioGroupField name={'hiring.recommended'}>
                    <FormControlLabel value='unrecommended' control={<Radio/>}
                                      label={t('fields.hiring.unrecommended')}/>
                    <FormControlLabel value='recommended' control={<Radio/>} label={t('fields.hiring.recommended')}/>
                </FormRadioGroupField>
            </Grid>
            {isRecommended && (
                <Grid item xs={12}>
                    <SelectEmployee required name='hiring.recommendedBy' label={t('fields.hiring.recommendedBy')}/>
                </Grid>
            )}
            <Grid item xs={12}>
                <FormDatePickerField fullWidth required name='hiring.date' label={t('fields.hiring.date')}/>
            </Grid>

            <Grid item xs={12}>
                <SelectEngagement required name='jobInformation.engagement'
                               label={t('fields.hiring.engagement')}/>
            </Grid>
            <Grid item xs={12}>
                <SelectJobPosition required name='jobInformation.position' label={t('fields.jobInformation.position')}/>
            </Grid>
            <Grid item xs={12}>
                <SelectEmployee name='jobInformation.reported' label={t('fields.jobInformation.reported')}/>
            </Grid>
            <Grid item xs={12}>
                <SelectWorkLocation required name='jobInformation.location' label={t('fields.jobInformation.location')}/>
            </Grid>
            <Grid item xs={12}>
                <FormTextField
                    fullWidth
                    multiline
                    minRows={3}
                    name='jobInformation.notes'
                    label={t('fields.jobInformation.notes')}
                />
            </Grid>
        </Grid>
  );
};

export default JobInfoForm;
