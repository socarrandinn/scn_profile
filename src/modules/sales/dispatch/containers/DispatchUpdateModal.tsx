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

  const { isLoading: isLoadingVerify, data } = useDispatchVerify(query, filters, open && !!filters);

  const initValue = useMemo(
    () => ({
      filters,
      dispatch: null,
    }),
    [filters],
  );

  const { control, onSubmit, isLoading, reset, resetMutation, error, setValue } = useDispatchUpdateForm(
    onClose,
    initValue,
  );
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

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<DispatchFormSkeleton />}>
            <DispatchVerifySummary data={data as IDispatchVerify} isLoading={isLoadingVerify} />
            <DispatchUpdateForm
              setValue={setValue}
              error={error}
              disabled={!data?.isValid}
              isLoading={isLoading || isLoadingVerify}
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
          loading={isLoading || loadingInitData}
          disabled={!!dataError || !data?.isValid}
          form='dispatch-update-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(DispatchUpdateModal);
