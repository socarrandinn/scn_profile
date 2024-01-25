import { memo, useCallback } from 'react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent } from '@mui/material';
import {
  ConditionContainer,
  DialogForm,
  Form,
  HandlerError,
  LoadingButton,
  SkeletonForm,
} from '@dfl/mui-react-common';

import { IUser } from 'modules/security/users/interfaces/IUser';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import useAddSupplierUsersForm from '../../hooks/useAddSupplierUsersForm';
import { useFindOneProducts } from '../../hooks/useFindOneProducts';
import { SelectContainer, AdvertismentList } from 'modules/inventory/provider/common/components/FormSections/AddUserForm';

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

const CreateSupplierUserModal = ({
  open,
  title,
  dataError,
  loadingInitData,
  onClose,
}: UserCreateModalProps) => {
  const { t } = useTranslation('supplier');
  const { id: supplierId } = useParams();
  const { control, onSubmit, isLoading, error, reset } = useAddSupplierUsersForm({ supplierId: supplierId || '', type: 'PRODUCT', onClose });
  const { data } = useFindOneProducts(supplierId as any);

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
      subtitle={t('form.subtitle', { supplierName: data?.name })}
      aria-labelledby={'user-creation-title'}
    >
      <DialogContent>
        <HandlerError error={dataError}/>
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} errors={USERS_ERRORS} />
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'supplier-user-form'} dark>
              <SelectContainer />
            </Form>
          </ConditionContainer>
        )}
      <AdvertismentList />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='supplier-user-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(CreateSupplierUserModal);
