import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Grid } from '@mui/material';
import {
  ConditionContainer,
  DialogForm,
  Form,
  FormTextField,
  HandlerError,
  LoadingButton,
  SkeletonForm,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { useNavigate } from 'react-router';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import { SelectProviderType } from 'modules/inventory/provider/common/components/FormSections/SelectProviderType';
import { SelectProviderRole } from 'modules/security/roles/components/SelectProviderRole';
import { IUser } from '../interfaces/IUser';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { SelectStore } from 'modules/inventory/provider/supplier/components/SelectStore';
import { AdvertisementList } from 'modules/inventory/provider/common/components/FormSections/AddUserForm';
import useUserProviderCreateForm from '../hooks/useUserProviderCreateForm';
import { SelectEmailUser } from '../components/SelectUser';

type UserProviderCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  dataError?: any;
  initValue?: IUser;
  loadingInitData?: boolean;
  userId?: string | null;
};

const UserProviderCreateModal = ({
  open,
  onClose,
  title,
  dataError,
  initValue,
  loadingInitData,
  userId,
}: UserProviderCreateModalProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  const { control, onSubmit, isLoading, error, reset, providerType } = useUserProviderCreateForm(initValue, onClose);
  const navigate = useNavigate();

  const handleAdvancedEditClick = useCallback(() => {
    navigate(`/security/users/${userId as string}/general`);
  }, [userId, navigate]);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      isLoading={loadingInitData}
      open={open}
      title={t(title)}
      aria-labelledby={'user-provider-creation-title'}
    >
      <DialogContent>
        <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} errors={USERS_ERRORS} />
            <Form
              onSubmit={onSubmit}
              control={control}
              isLoading={isLoading}
              size={'small'}
              id={'user-provider-form'}
              dark
            >
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} md={6}>
                  <FormTextField
                    fullWidth
                    autoFocus
                    required
                    name='firstName'
                    label={t('common:firstName')}
                    placeholder={t('common:firstName')}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormTextField
                    fullWidth
                    name='lastName'
                    required
                    label={t('common:lastName')}
                    placeholder={t('common:lastName')}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <FormTextField
                    fullWidth
                    name='email'
                    required
                    label={t('common:email')}
                    placeholder='example@gmail.com'
                  />
                </Grid> */}

                <Grid item xs={12}>
                  <SelectEmailUser name='email' label={t('common:email')} placeholder='example@gmail.com' />
                </Grid>

                <Grid item xs={12}>
                  <SelectProviderType
                    name='type'
                    required
                    label={t('common:provider:select')}
                    placeholder={t('common:provider:select')}
                  />
                </Grid>

                <Grid item xs={12}>
                  <SelectProviderRole
                    name='roles'
                    disabled={!providerType}
                    multiple
                    label={t('roles')}
                    placeholder={t('selectRoles')}
                    type={providerType}
                  />
                </Grid>

                {providerType === ROLE_PROVIDER_TYPE_ENUM.LOGISTIC && (
                  <Grid item xs={12}>
                    <SelectStore
                      name='store'
                      multiple={false}
                      label={t('supplier:form.store')}
                      placeholder={t('supplier:form.selectStore')}
                    />
                    <AdvertisementList />
                  </Grid>
                )}
              </Grid>
            </Form>
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        {!!userId && (
          <Button onClick={handleAdvancedEditClick} variant={'outlined'}>
            {t('advancedEdit')}
          </Button>
        )}
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='user-provider-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(UserProviderCreateModal);
