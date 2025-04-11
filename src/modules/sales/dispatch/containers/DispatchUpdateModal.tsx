import { memo, useCallback, useMemo } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { useTableSearch } from '@dfl/mui-admin-layout';
import { IDispatch, IDispatchVerify } from '../interfaces';
import { useDispatchVerify } from '../hooks/useDispatchVerify';
import useDispatchUpdateForm from '../hooks/useDispatchUpdateForm';
import { DISPATCH_ERRORS } from '../constants';
import { DispatchFormSkeleton } from '../components/DispatchForm';
import { DispatchUpdateForm } from '../components/DispatchUpdateForm';
import DispatchVerifySummary from '../components/DispatchSummary/DispatchVerifySummary';
import { useIsValid } from 'modules/sales/common/hooks/useIsValid';

type DispatchUpdateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  filters?: any;
  initValue?: Omit<IDispatch, '_id' | 'metrics' | 'createdAt'>;
  onClose: () => void;
};

const DispatchUpdateModal = ({
  title = 'update',
  filters,
  open,
  onClose,
  dataError,
  loadingInitData,
}: DispatchUpdateModalProps) => {
  const { query } = useTableSearch();
  const { t } = useTranslation('dispatch');

  const initValue = useMemo(
    () => ({
      filters,
      dispatch: null,
    }),
    [filters],
  );

  const { control, onSubmit, isLoading, reset, resetMutation, error, setValue, dispatch } = useDispatchUpdateForm(
    onClose,
    initValue,
  );

  // valid dispatch
  const { isInitialLoading, data } = useDispatchVerify({ query, filters, space: dispatch?.space }, open && !!filters);
  const { isValid } = useIsValid(initValue, data);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
    resetMutation();
  }, [onClose, reset, resetMutation]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'dispatch-update-title'}
    >
      <DialogContent>
        {(!data?.isValid || dataError) && (
          <HandlerError error={dataError} errors={DISPATCH_ERRORS} mapError={mapGetOneErrors} />
        )}

        <DispatchVerifySummary data={data as IDispatchVerify} isLoading={isInitialLoading} isValid={isValid} />

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<DispatchFormSkeleton />}>
            <DispatchUpdateForm
              setValue={setValue}
              error={error}
              isLoading={isLoading || isInitialLoading}
              control={control}
              onSubmit={onSubmit}
            />
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
          form='dispatch-update-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(DispatchUpdateModal);
