import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Box, Grid } from '@mui/material';
import {
  ConditionContainer,
  DialogForm,
  Form,
  FormTextField,
  HandlerError,
  LoadingButton,
  SkeletonForm,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { ICompensation } from 'modules/rrhh/employee/interfaces';
import SelectCompensationType from 'modules/rrhh/employee/components/SelectCompensationType/SelectCompensationType';
import SelectPaymentType from 'modules/rrhh/employee/components/SelectPaymentType/SelectPaymentType';
import SelectFrequency from 'modules/rrhh/employee/components/SelectFrequency/SelectFrequency';
import useCompensationCreateForm from 'modules/rrhh/employee/hooks/useCompensationCreateForm';
import { SelectReasonForCompensationChanged } from 'modules/rrhh/employee/components/SelectReasonForCompensationChanged';

type CompensationCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  dataError?: any;
  initValue?: ICompensation;
  loadingInitData?: boolean;
  employeeId?: string | null;
};

const CompensationCreateModal = ({ open, onClose, title, dataError }: CompensationCreateModalProps) => {
  const { t } = useTranslation('employee');
  const { control, onSubmit, isLoading, error, reset } = useCompensationCreateForm(onClose);

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
        >
            <DialogContent>
                <HandlerError error={dataError} mapError={mapGetOneErrors}/>
                {!dataError && (
                    <>
                        <HandlerError error={error}/>
                        <Form
                            onSubmit={onSubmit}
                            control={control}
                            isLoading={isLoading}
                            size={'small'}
                            id={'compensation-form'}
                            dark
                        >
                            <Box pt={2}>
                                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={12}>
                                        <SelectCompensationType required name='type'
                                                                label={t('fields.compensation.type')}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectPaymentType required name='paymentType'
                                                           label={t('fields.compensation.paymentType')}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormTextField fullWidth required name='value'
                                                       label={t('fields.compensation.value')}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectFrequency required name='frequency'
                                                         label={t('fields.compensation.frequency')}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectReasonForCompensationChanged
                                            required
                                            name='changeReason'
                                            label={t('fields.compensation.changeReason')}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormTextField
                                            fullWidth
                                            multiline
                                            minRows={3}
                                            name='notes'
                                            label={t('fields.compensation.notes')}
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
                <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='compensation-form'>
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
  );
};

export default memo(CompensationCreateModal);
