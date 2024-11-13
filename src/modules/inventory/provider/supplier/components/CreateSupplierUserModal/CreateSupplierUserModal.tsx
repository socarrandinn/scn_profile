import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';

import { IUser } from 'modules/security/users/interfaces/IUser';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import useAddSupplierUsersForm from 'modules/inventory/provider/supplier/hooks/useAddSupplierUsersForm';
import { AdvertisementList } from 'modules/inventory/provider/common/components/FormSections/AddUserForm';
import SupplierUserSelectContainer from './SupplierUserSelectContainer';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';

type UserCreateModalProps = {
  open: boolean;
  title: string;
  dataError?: any;
  initValue?: IUser;
  loadingInitData?: boolean;
  userId?: string | null;

  // Methods
  onClose: () => void;
};

const CreateSupplierUserModal = ({ open, title, dataError, loadingInitData, onClose }: UserCreateModalProps) => {
  const { t } = useTranslation('supplier');
  const { providerProducts, providerProductsId: supplierId } = useProviderProductsDetail();
  const { control, onSubmit, isLoading, error, reset } = useAddSupplierUsersForm({
    supplierId: supplierId || '',
    onClose,
  });

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      isLoading={loadingInitData}
      open={open}
      onClose={handleClose}
      title={title}
      subtitle={t('form.subtitle', { supplierName: providerProducts?.name })}
      aria-labelledby={'user-creation-title'}
    >
      <DialogContent>
        <HandlerError error={dataError} />
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} errors={USERS_ERRORS} />
            <Form
              onSubmit={onSubmit}
              control={control}
              isLoading={isLoading}
              size={'small'}
              id={'supplier-user-form'}
              dark
            >
              <SupplierUserSelectContainer />
            </Form>
          </ConditionContainer>
        )}
        <AdvertisementList />
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='supplier-user-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(CreateSupplierUserModal);
