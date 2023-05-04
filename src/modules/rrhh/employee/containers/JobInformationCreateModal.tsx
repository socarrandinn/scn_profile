import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Box, Grid, FormControlLabel, Radio } from '@mui/material';
import {
  ConditionContainer,
  DialogForm,
  Form,
  FormDatePickerField,
  FormRadioGroupField,
  FormTextField,
  HandlerError,
  LoadingButton,
  SkeletonForm,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import useJobInformationCreateForm from 'modules/rrhh/employee/hooks/useJobInformationCreateForm';
import { JobInformation } from 'modules/rrhh/employee/interfaces';
import { SelectEmployee } from 'modules/rrhh/employee/components/SelectEmployee';
import { SelectEngagement } from 'modules/rrhh/employee/components/SelectEngagement';
import { SelectJobPosition } from 'modules/rrhh/settings/job-position/components/SelectJobPosition';
import { SelectCategory } from 'modules/rrhh/settings/category/components/SelectCategory';
import { SelectWorkLocation } from 'modules/rrhh/settings/work-location/components/SelectWorkLocation';

type JobInformationCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  dataError?: any;
  initValue?: JobInformation;
  loadingInitData?: boolean;
  employeeId?: string | null;
};

const JobInformationCreateModal = ({
  open,
  onClose,
  title,
  dataError,
  initValue,
  loadingInitData,
}: JobInformationCreateModalProps) => {
  const { t } = useTranslation('employee');
  const { control, onSubmit, isLoading, error, reset, watch } = useJobInformationCreateForm(initValue, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  // @ts-ignore
  const recommended = watch?.('recommended');
  // @ts-ignore
  const isRecommended = recommended === 'recommended';

  return (
    <DialogForm
      isLoading={loadingInitData}
      open={open}
      onClose={handleClose}
      title={t(title)}
      aria-labelledby={'user-creation-title'}
    >
      <DialogContent>
        <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} />
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'user-form'} dark>
              <Box pt={2}>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12} pt={'0px!important'}>
                    <FormRadioGroupField name={'recommended'}>
                      <FormControlLabel
                        value='unrecommended'
                        control={<Radio />}
                        label={t('fields.hiring.unrecommended')}
                      />
                      <FormControlLabel
                        value='recommended'
                        control={<Radio />}
                        label={t('fields.hiring.recommended')}
                      />
                    </FormRadioGroupField>
                  </Grid>
                  {isRecommended && (
                    <Grid item xs={12}>
                      <SelectEmployee required name='recommendedBy' label={t('fields.hiring.recommendedBy')} />
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <FormDatePickerField fullWidth required name='dateActivated' label={t('fields.hiring.date')} />
                  </Grid>

                  <Grid item xs={12}>
                    <SelectEngagement required name='engagement' label={t('fields.hiring.engagement')} />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectJobPosition required name='position' label={t('fields.jobInformation.position')} />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectCategory required name='category' label={t('fields.category')} />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectEmployee name='reported' label={t('fields.jobInformation.reported')} />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectWorkLocation required name='location' label={t('fields.jobInformation.location')} />
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
          </ConditionContainer>
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
