import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useRoleProviderCreateForm from 'modules/security/roles/hooks/useRoleProviderCreateForm';
import { IRoleProvider } from 'modules/security/roles/interfaces';
import { RoleProviderForm } from 'modules/security/roles/components/RoleProviderForm';

type RoleProviderCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IRoleProvider;
  onClose: () => void;
};
const RoleProviderCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: RoleProviderCreateModalProps) => {
  const { t } = useTranslation('role');
  const { control, onSubmit, isLoading, reset, error, onSubmitReset } = useRoleProviderCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'role-provider-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={3} />}>
            <RoleProviderForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        {title !== 'edit' ? (
          <LoadingButton
            variant='outlined'
            type={'submit'}
            form='form-role-provider'
            onClick={onSubmitReset}
          >
            {t('common:save')}
          </LoadingButton>
        ) : null}
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form-role-provider'
        >
          {title !== 'edit' ? t('saveClose') : t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(RoleProviderCreateModal);
