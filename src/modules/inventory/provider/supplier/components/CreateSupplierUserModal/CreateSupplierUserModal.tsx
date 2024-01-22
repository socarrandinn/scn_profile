import { memo, useCallback } from 'react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Box, Button, DialogActions, DialogContent, Grid } from '@mui/material';
import {
  ConditionContainer,
  DialogForm,
  Form,
  HandlerError,
  LoadingButton,
  SkeletonForm,
} from '@dfl/mui-react-common';
import { grey } from '@mui/material/colors';

import { IUser } from 'modules/security/users/interfaces/IUser';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import { SelectStore } from '../SelectStore';
import { SelectUser } from '../SelectUser';
import useAddSupplierUsersForm from '../../hooks/useAddSupplierUsersForm';
import { useFindOneProducts } from '../../hooks/useFindOneProducts';

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
  const { control, onSubmit, isLoading, error, reset } = useAddSupplierUsersForm(supplierId as any, onClose);
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
        <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} errors={USERS_ERRORS} />
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'supplier-user-form'} dark>
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                  <SelectRole name='role' multiple={false} label={t('form.role')} placeholder={t('form.selectRole')} />
                </Grid>
                <Grid item xs={12}>
                  <SelectStore name='store' multiple={false} label={t('form.store')} placeholder={t('form.selectStore')} />
                </Grid>
                <Grid item xs={12}>
                  <SelectUser name='users' multiple label={t('form.users')} placeholder={t('form.selectUsers')} />
                </Grid>
              </Grid>
            </Form>
          </ConditionContainer>
        )}
        <Box mt={2} fontSize={'small'} color={grey[600]}>
            <li>{t('form.necesary.registeredUsers')}</li>
            <li>{t('form.necesary.belongOneSupplier')}</li>
            <li>{t('form.necesary.noGeneralAdmins')}</li>
        </Box>
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
