import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Box, Grid } from '@mui/material';
import {
  DialogForm,
  Form,
  FormCheckBoxField,
  FormDatePickerField,
  FormTextField,
  HandlerError,
  LoadingButton,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import useJobInformationCreateForm from 'modules/rrhh/employee/employee-detail/job-information/hooks/useJobInformationCreateForm';
import { JobInformation } from 'modules/rrhh/employee/common/interfaces';
import { SelectEmployee } from 'modules/rrhh/employee/common/components/SelectEmployee';
import { SelectEngagement } from 'modules/rrhh/employee/management/components/SelectEngagement';
import { SelectJobPosition } from 'modules/rrhh/settings/job-position/components/SelectJobPosition';
import { SelectWorkLocation } from 'modules/rrhh/settings/work-location/components/SelectWorkLocation';
import { TeamSelect } from 'modules/rrhh/team/components/TeamSelect';
import { SelectReasonForJobInformationChanged } from 'modules/rrhh/employee/management/components/SelectReasonForJobInformationChanged';

type JobInformationCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  dataError?: any;
  initValue?: JobInformation;
  loadingInitData?: boolean;
  employeeId?: string | null;
};

const JobInformationCreateModal = ({ open, onClose, title, dataError }: JobInformationCreateModalProps) => {
  const { t } = useTranslation('employee');
  const { control, onSubmit, isLoading, error, reset, watch } = useJobInformationCreateForm(onClose);
  const isEnd = watch('isEnd');
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm open={open} onClose={handleClose} title={t(title)} aria-labelledby={'user-creation-title'}>
      <DialogContent>
        <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />
        {!dataError && (
          <>
            <HandlerError error={error} />
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'user-form'} dark>
              <Box pt={2}>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12}>
                    <FormDatePickerField
                      fullWidth
                      required
                      name='dateActivated'
                      label={t('fields.jobInformation.dateActivated')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormCheckBoxField name={'isEnd'} label={t('fields.jobInformation.endActivated')} />
                    {isEnd && <FormDatePickerField fullWidth name='endActivated' />}
                  </Grid>

                  <Grid item xs={12}>
                    <SelectEngagement required name='engagement' label={t('fields.hiring.engagement')} />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectJobPosition required name='position' label={t('fields.jobInformation.position')} />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectEmployee name='reported' label={t('fields.jobInformation.reported')} />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectWorkLocation required name='location' label={t('fields.jobInformation.location')} />
                  </Grid>
                  <Grid item xs={12}>
                    <TeamSelect required name='team' label={t('fields.jobInformation.team')} />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectReasonForJobInformationChanged
                      required
                      name='changeReason'
                      label={t('fields.jobInformation.changeReason')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField
                      fullWidth
                      multiline
                      minRows={3}
                      name='notes'
                      label={t('fields.jobInformation.notes')}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Form>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='user-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(JobInformationCreateModal);
