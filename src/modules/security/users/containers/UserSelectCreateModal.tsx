import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Grid } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useNavigate } from 'react-router';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';
import { SelectSpaceRole } from '../components/SelectSpaceRole';
import { SelectUser } from '../components/SelectUser';
import useAddUsersSpaceForm from '../hooks/useAddUsersSpaceForm';

type UserSelectCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  dataError?: any;
  initValue?: IUser;
  loadingInitData?: boolean;
  userId?: string | null;
};

const UserSelectCreateModal = ({
  open,
  onClose,
  title,
  dataError,
  loadingInitData,
  userId,
}: UserSelectCreateModalProps) => {
  const { t } = useTranslation(['users', 'role']);

  const { control, onSubmit, isLoading, error, reset } = useAddUsersSpaceForm(onClose);
  const navigate = useNavigate();

  const handleAdvancedEditClick = useCallback(() => {
    navigate(`/users/${userId as string}/general`);
  }, [userId, navigate]);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      isLoading={loadingInitData}
      open={open}
      onClose={handleClose}
      title={t(title)}
      aria-labelledby={'user-creation-title'}
    >
      <DialogContent>
        <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5} />}>
            <HandlerError error={error} errors={USERS_ERRORS} />
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'user-form'} dark>
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                  <SelectSpaceRole
                    name={'role'}
                    label={t('role:name')}
                    placeholder={t('selectRole')}
                    multiple={false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <SelectUser name={'users'} label={t('userList')} placeholder={t('selectUsers')} fetchOption={{}} />
                </Grid>
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
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='user-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(UserSelectCreateModal);
