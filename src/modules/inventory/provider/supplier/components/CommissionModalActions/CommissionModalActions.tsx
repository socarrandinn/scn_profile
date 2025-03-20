import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';

import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import SupplierCommissionContainer from '../../containers/SupplierCommissionContainer';
import useUpdateCommissionSupplier from '../../hooks/useUpdateCommissionSupplier';
import { ICommissionUpdate } from '../../interfaces';
import { ModifyCommissionConfirmationMessage } from '../ConfirmationMessage';

type UserCreateModalProps = {
  open: boolean;
  title: string;
  dataError?: any;
  initValue?: ICommissionUpdate;
  loadingInitData?: boolean;
  userId?: string | null;

  // Methods
  onClose: () => void;
};

const CommissionModalActions = ({ open, title, loadingInitData, initValue, onClose }: UserCreateModalProps) => {
  const { t } = useTranslation('supplier');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { control, handleSubmit, onSubmit, isLoading, error, reset } = useUpdateCommissionSupplier(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirmSubmit = () => {
    onSubmit();
    setConfirmOpen(false);
  };

  return (
    <>
      <DialogForm isLoading={loadingInitData} open={open} onClose={handleClose} title={title} maxWidth='xs'>
        <DialogContent>
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={2} />}>
            <HandlerError error={error} errors={USERS_ERRORS} />
            <Form
              onSubmit={handleSubmit(handleConfirmOpen)}
              control={control}
              isLoading={isLoading}
              size={'small'}
              id={'supplier-commission-form'}
              dark
            >
              <SupplierCommissionContainer />
            </Form>
          </ConditionContainer>
        </DialogContent>
        <DialogActions>
          <Button variant='grey' onClick={handleClose}>
            {t('common:cancel')}
          </Button>
          <LoadingButton variant='contained' type='submit' loading={isLoading} form='supplier-commission-form'>
            {t('common:save')}
          </LoadingButton>
        </DialogActions>
      </DialogForm>
      <Dialog open={confirmOpen}>
        <DialogActions>
          <Button variant='grey' onClick={handleConfirmClose}>
            {t('common:cancel')}
          </Button>
          <LoadingButton
            variant='contained'
            onClick={handleConfirmSubmit}
            loading={isLoading}
            form='supplier-commission-form'
          >
            {t('common:save')}
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <ModifyCommissionConfirmationMessage
        isLoading={isLoading}
        confirmOpen={confirmOpen}
        handleConfirmClose={handleConfirmClose}
        handleConfirmSubmit={handleConfirmSubmit}
      />
    </>
  );
};

export default memo(CommissionModalActions);
