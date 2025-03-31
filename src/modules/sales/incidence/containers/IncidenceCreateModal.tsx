import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Divider } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useIncidenceCreateForm from 'modules/sales/incidence/hooks/useIncidenceCreateForm';
import { IIncidence } from 'modules/sales/incidence/interfaces';
import { IncidenceForm, IncidenceFormSkeleton } from 'modules/sales/incidence/components/IncidenceForm';
import { INCIDENCE_ERRORS } from '../constants';

type IncidenceCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IIncidence;
  onClose: () => void;
};
const IncidenceCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: IncidenceCreateModalProps) => {
  const { t } = useTranslation('incidence');

  const { control, onSubmit, isLoading, reset, error, watch, formState, setValue } = useIncidenceCreateForm(
    onClose,
    initValue,
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'incidence-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<IncidenceFormSkeleton />}>
            <Divider sx={{ mb: 2 }} />
            <HandlerError error={error} errors={INCIDENCE_ERRORS} />
            <Form
              onSubmit={onSubmit}
              control={control}
              isLoading={isLoading}
              size={'small'}
              id={'incidence-form'}
              formState={formState}
              setValue={setValue}
              watch={watch}
            >
              <IncidenceForm initValue={initValue} />
            </Form>
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='incidence-form'
        >
          {t('report')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(IncidenceCreateModal);
