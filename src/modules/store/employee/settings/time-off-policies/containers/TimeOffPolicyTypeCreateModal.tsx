import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Box, Grid } from '@mui/material';
import {
  ConditionContainer,
  DialogForm,
  Form,
  FormCheckBoxField, FormColorPicker,
  FormTextField,
  HandlerError,
  LoadingButton,
  SkeletonForm,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { ITimeOffPolicyType } from 'modules/store/employee/settings/time-off-policies/interfaces';
import useTimeOffPolicyTypeCreateForm
  from 'modules/store/employee/settings/time-off-policies/hooks/useTimeOffPolicyTypeCreateForm';
import SelectCommonInterval from 'modules/store/employee/settings/time-off-policies/components/SelectCommonInterval';

type TimeOffPolicyTypeCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  dataError?: any;
  initValue?: ITimeOffPolicyType;
  loadingInitData?: boolean;
  timeOffTypeId?: string | null;
};

const TimeOffPolicyTypeCreateModal = ({
  open,
  onClose,
  title,
  dataError,
  loadingInitData,
  initValue,
  timeOffTypeId,
}: TimeOffPolicyTypeCreateModalProps) => {
  const { t } = useTranslation('timeOffType');
  const { control, onSubmit, isLoading, error, reset } = useTimeOffPolicyTypeCreateForm(initValue, onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
        <DialogForm
            open={open}
            onClose={handleClose}
            title={t(title)}
            aria-labelledby={'user-creation-title'}
            isLoading={loadingInitData}
        >
            <DialogContent>
                <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors}/>
                {!dataError && (
                    <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5}/>}>
                        <HandlerError error={error}/>
                        <Form
                            onSubmit={onSubmit}
                            control={control}
                            isLoading={isLoading}
                            size={'small'}
                            id={'time-off-types-form'}
                            dark
                        >
                            <Box pt={2}>
                                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={12}>
                                        <FormTextField autoFocus required fullWidth name='name'
                                                       label={t('fields.name')}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormColorPicker required name='color' label={t('fields.color')}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectCommonInterval required name='logType' label={t('fields.logType')}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormCheckBoxField name={'showInCalendar'} label={t('fields.showInCalendar')}/>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Form>
                    </ConditionContainer>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{t('common:cancel')}</Button>
                <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='time-off-types-form'>
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
  );
};

export default memo(TimeOffPolicyTypeCreateModal);
