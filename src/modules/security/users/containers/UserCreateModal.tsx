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
import useUserCreateForm from 'modules/security/users/hooks/useUserCreateForm';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useNavigate } from 'react-router';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import { USERS_ERRORS } from 'modules/security/users/constants/errors';

type UserCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  dataError?: any;
  initValue?: IUser;
  loadingInitData?: boolean;
  userId?: string | null;
};

const UserCreateModal = ({
  open,
  onClose,
  title,
  dataError,
  initValue,
  loadingInitData,
  userId,
}: UserCreateModalProps) => {
  const { t } = useTranslation('users');
  const { control, onSubmit, isLoading, error, reset } = useUserCreateForm(initValue, onClose);
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
            onClose={handleClose}
            title={t(title)}
            aria-labelledby={'user-creation-title'}
        >
            <DialogContent>
                <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors}/>
                {!dataError && (
                    <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={5}/>}>
                        <HandlerError error={error} errors={USERS_ERRORS}/>
                        <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'}
                              id={'user-form'} dark>
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
                                <Grid item xs={12}>
                                    <FormTextField
                                        fullWidth
                                        name='email'
                                        required
                                        label={t('common:email')}
                                        placeholder='example@gmail.com'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectRole name='security.roles' multiple label={t('roles')}
                                                placeholder={t('selectRoles')}/>
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

export default memo(UserCreateModal);
