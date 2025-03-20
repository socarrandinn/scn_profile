import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';

import { IUser } from 'modules/security/users/interfaces/IUser';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import { AdvertisementList } from 'modules/inventory/provider/common/components/FormSections/AddUserForm';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import useAddLogisticUsersForm from 'modules/inventory/provider/logistics/hooks/useAddLogisticUsersForm';
import LogisticUsersSelectContainer from './LogisticUsersSelectContainer';

type CreateLogisticUserModalProps = {
  open: boolean;
  title: string;
  dataError?: any;
  initValue?: IUser;
  loadingInitData?: boolean;
  userId?: string | null;

  // Methods
  onClose: () => void;
};

const CreateLogisticUserModal = ({
  open,
  title,
  dataError,
  loadingInitData,
  onClose,
}: CreateLogisticUserModalProps) => {
  const { t } = useTranslation('supplier');
  const { logistic, logisticId } = useLogisticsDetailContext();
  const { control, onSubmit, isLoading, error, reset } = useAddLogisticUsersForm({
    logisticId: logisticId || '',
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
      subtitle={t('form.subtitle', { supplierName: logistic?.name })}
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
              id={'logistic-user-form'}
              dark
            >
              <LogisticUsersSelectContainer />
            </Form>
          </ConditionContainer>
        )}
        <AdvertisementList />
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='logistic-user-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(CreateLogisticUserModal);
