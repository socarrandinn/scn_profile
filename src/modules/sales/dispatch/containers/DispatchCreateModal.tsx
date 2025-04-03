import { memo, useCallback, useMemo } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useDispatchCreateForm from 'modules/sales/dispatch/hooks/useDispatchCreateForm';
import { DispatchDTO, IDispatch, IDispatchVerify } from 'modules/sales/dispatch/interfaces';
import { DispatchForm, DispatchFormSkeleton } from 'modules/sales/dispatch/components/DispatchForm';
import { useDispatchVerify } from '../hooks/useDispatchVerify';
import { useTableSearch } from '@dfl/mui-admin-layout';
import { DISPATCH_ERRORS, mapGetOneErrors } from '../constants';
import DispatchVerifySummary from '../components/DispatchSummary/DispatchVerifySummary';
import DispatchSummary from '../components/DispatchSummary/DispatchSummary';
import { pick } from 'lodash';
import { useIsValid } from 'modules/sales/payment-agreement/hooks/useIsValid';

type DispatchCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IDispatch;
  onClose: () => void;
  filters?: any;
};
const DispatchCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  filters,
}: DispatchCreateModalProps) => {
  const { t } = useTranslation('dispatch');
  const { query } = useTableSearch();
  const { data, isInitialLoading } = useDispatchVerify(query, filters, open && !!filters);

  // valid dispatch
  const { isValid } = useIsValid(initValue, data);

  const _initValue: DispatchDTO = useMemo(
    () => pick({ ...(initValue as IDispatch), filters }, ['_id', 'name', 'filters']),
    [initValue, filters],
  );

  const { control, onSubmit, isLoading, reset, error } = useDispatchCreateForm(onClose, _initValue);

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
      aria-labelledby={'dispatch-creation-title'}
    >
      <DialogContent>
        {(isValid || dataError) && (
          <HandlerError error={dataError} errors={DISPATCH_ERRORS} mapError={mapGetOneErrors} />
        )}

        {initValue?._id ? (
          <DispatchSummary metrics={initValue?.metrics} />
        ) : (
          <DispatchVerifySummary data={data as IDispatchVerify} isLoading={isInitialLoading} />
        )}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<DispatchFormSkeleton />}>
            <DispatchForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData || isInitialLoading}
          disabled={!!dataError || isValid}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(DispatchCreateModal);
