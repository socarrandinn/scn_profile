import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { useNavigate } from 'react-router';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import useUserProviderCreateForm from '../hooks/useUserProviderCreateForm';
import { IUserInvite } from '../interfaces/IUserInvite';
import UserInviteForm from '../components/UserInviteForm/UserInviteForm';

type UserProviderCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  dataError?: any;
  initValue?: IUserInvite;
  loadingInitData?: boolean;
  userId?: string | null;
  Form?: any;
};

const UserProviderCreateModal = ({
  open,
  onClose,
  title,
  subtitle,
  dataError,
  initValue,
  loadingInitData,
  userId,
  Form,
}: UserProviderCreateModalProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  const { control, onSubmit, isLoading, error, reset, providerType, isNationalStore } = useUserProviderCreateForm(
    initValue,
    onClose,
  );
  const navigate = useNavigate();

  const handleAdvancedEditClick = useCallback(() => {
    navigate(`/security/users/${userId as string}/general`);
  }, [userId, navigate]);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  const ComponentForm = Form || UserInviteForm;

  return (
    <DialogForm
      isLoading={loadingInitData}
      open={open}
      title={t(title)}
      subtitle={subtitle}
      aria-labelledby={'user-provider-creation-title'}
    >
      <DialogContent>
        <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} errors={USERS_ERRORS} />
            <ComponentForm
              control={control}
              isLoading={isLoading}
              isNationalStore={isNationalStore}
              onSubmit={onSubmit}
              providerType={providerType as ROLE_PROVIDER_TYPE_ENUM}
            />
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
