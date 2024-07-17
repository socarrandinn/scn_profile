import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useOfferCreateForm from 'modules/sales-offer/offer/hooks/useOfferCreateForm';
import { IOffer } from 'modules/sales-offer/offer/interfaces';
import { OfferForm, OfferFormSkeleton } from 'modules/sales-offer/offer/components/OfferForm';
import { OFFER_ERRORS } from 'modules/sales-offer/offer/constants';
import { mapGetOneErrors } from 'constants/errors';

type OfferCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IOffer;
  onClose: () => void;
};
const OfferCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: OfferCreateModalProps) => {
  const { t } = useTranslation('offer');
  const { control, onSubmit, isLoading, reset, error } = useOfferCreateForm(onClose, initValue);
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
      aria-labelledby={'offer-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<OfferFormSkeleton />}>
            <OfferForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(OfferCreateModal);
