import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Box, Grid } from '@mui/material';
import {
  ConditionContainer,
  DialogForm,
  Form,
  FormCheckBoxField,
  FormTextField,
  HandlerError,
  LoadingButton,
  SkeletonForm,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import useTimeOffPolicyCreateForm from 'modules/rrhh/settings/time-off-policies/hooks/useTimeOffPolicyCreateForm';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';
import { FormAccumulateField } from 'modules/rrhh/settings/time-off-policies/components/FormAccumulateField';
import { FormRulesField } from 'modules/rrhh/settings/time-off-policies/components/FormRulesField';
import { FormFontIconPicker } from 'components/libs/FontIconPicker';
import { SelectTimeOffType } from 'modules/rrhh/settings/time-off-policies/components/SelectTimeOffType';

type TimeOffPolicyCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  dataError?: any;
  initValue?: ITimeOffPolicies;
  loadingInitData?: boolean;
  timeOffPolicyId?: string | null;
};

const TimeOffPolicyCreateModal = ({
  open,
  onClose,
  title,
  dataError,
  loadingInitData,
  initValue,
  timeOffPolicyId,
}: TimeOffPolicyCreateModalProps) => {
  const { t } = useTranslation('timeOffPolicy');
  const { control, onSubmit, isLoading, error, reset, watch, errorValidations } = useTimeOffPolicyCreateForm(
    initValue,
    onClose,
  );

  const isAccumulative = watch('accumulate.isAccumulative');

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
        <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} />
            <Form
              onSubmit={onSubmit}
              control={control}
              isLoading={isLoading}
              size={'small'}
              id={'time-off-policy-form'}
              dark
            >
              <Box pt={2}>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12}>
                    <FormTextField autoFocus required fullWidth name='name' label={t('fields.name')} />
                  </Grid>

                  <Grid item xs={12}>
                    <FormFontIconPicker
                      name='icon'
                      label={t('fields.icon')}
                      showPreviewInLine
                      size='medium'
                      required
                      error={errorValidations?.icon}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <SelectTimeOffType name='type' label={t('fields.type')} required />
                  </Grid>

                  <Grid item xs={12}>
                    <FormCheckBoxField name={'isPaid'} label={t('fields.isPaid')} />
                  </Grid>

                  <Grid item xs={12}>
                    <FormCheckBoxField name={'needApproval'} label={t('fields.needApproval')} />
                  </Grid>

                  <Grid item xs={12}>
                    <FormAccumulateField
                      isAccumulative={isAccumulative}
                      name='accumulate'
                      label={t('fields.accumulate.title')}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormRulesField name='rules' label={t('fields.rules.title')} />
                  </Grid>

                  <Grid item xs={12}>
                    <FormTextField fullWidth multiline minRows={3} name='notes' label={t('fields.description')} />
                  </Grid>
                </Grid>
              </Box>
            </Form>
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='time-off-policy-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(TimeOffPolicyCreateModal);
