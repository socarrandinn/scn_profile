import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import UserInviteForm from '../../users/components/UserInviteForm/UserInviteForm';
import { ICreateUserInvite } from '../interfaces';
import useUsersInviteCreateForm from '../hooks/useUsersInviteCreateForm';
import { USERS_INVITE_ERRORS } from '../constants';

type UserInviteCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  dataError?: any;
  initValue?: ICreateUserInvite;
  loadingInitData?: boolean;
  Form?: any;
  schema: any;
};

const UserInviteCreateModal = ({
  open,
  onClose,
  title,
  subtitle,
  dataError,
  initValue,
  loadingInitData,
  Form,
  schema,
}: UserInviteCreateModalProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  const { control, onSubmit, isLoading, error, reset } = useUsersInviteCreateForm(onClose, initValue, schema);

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
      aria-labelledby={'user-invite-creation-title'}
    >
      <DialogContent>
        <HandlerError error={dataError} errors={USERS_INVITE_ERRORS} mapError={mapGetOneErrors} />
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} errors={USERS_INVITE_ERRORS} />
            <ComponentForm control={control} isLoading={isLoading} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>

        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='user-invite-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(UserInviteCreateModal);
