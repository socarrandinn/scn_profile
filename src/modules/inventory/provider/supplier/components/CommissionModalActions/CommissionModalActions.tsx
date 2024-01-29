import { memo, useCallback, useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';

import { IUser } from 'modules/security/users/interfaces/IUser';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import SupplierCommissionContainer from '../../containers/SupplierCommissionContainer';
import useUpdateCommissionSupplier from '../../hooks/useUpdateCommissionSupplier';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { SupplierService } from '../../services';
import { ISupplier } from '../../interfaces';

type UserCreateModalProps = {
  open: boolean;
  title: string;
  dataError?: any;
  initValue?: IUser;
  loadingInitData?: boolean;
  userId?: string | null;
  suppliers?: any;

  // Methods
  onClose: () => void;
};

const CommissionModalActions = ({
  open,
  title,
  dataError,
  loadingInitData,
  suppliers,
  onClose,
}: UserCreateModalProps) => {
  const { t } = useTranslation('supplier');
  // const { id: supplierId } = useParams();
  const { selected } = useTableSelection();
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);

  useEffect(() => {
    if (suppliers) {
      const newSelectedSuppliers = suppliers.filter((supplier: any) => selected.includes(supplier._id));
      setSelectedSuppliers(newSelectedSuppliers);
    }
  }, [selected, suppliers]);
  const { control, onSubmit, isLoading, error, reset } = useUpdateCommissionSupplier({ onClose, selectedSuppliers });
  // const { data } = useFindOneProducts(supplierId as any);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm isLoading={loadingInitData} open={open} onClose={handleClose} title={title} maxWidth='xs'>
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
              id={'supplier-commission-form'}
              dark
            >
              <SupplierCommissionContainer />
            </Form>
          </ConditionContainer>
        )}
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
