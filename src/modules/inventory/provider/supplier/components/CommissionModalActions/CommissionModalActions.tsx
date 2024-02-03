import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';

import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import SupplierCommissionContainer from '../../containers/SupplierCommissionContainer';
import useUpdateCommissionSupplier from '../../hooks/useUpdateCommissionSupplier';
import { ICommissionUpdate } from '../../interfaces';

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
  const { control, onSubmit, isLoading, error, reset } = useUpdateCommissionSupplier(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm isLoading={loadingInitData} open={open} onClose={handleClose} title={title} maxWidth='xs'>
      <DialogContent>
        <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={2} />}>
          <HandlerError error={error} errors={USERS_ERRORS} />
          <Form
            onSubmit={onSubmit}
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
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='supplier-commission-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(CommissionModalActions);
