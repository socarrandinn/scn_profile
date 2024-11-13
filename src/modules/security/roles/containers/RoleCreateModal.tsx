import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useRoleCreateForm from 'modules/security/roles/hooks/useRoleCreateForm';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleForm } from 'modules/security/roles/components/RoleForm';

type RoleCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IRole;
  onClose: () => void;
};
const RoleCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: RoleCreateModalProps) => {
  const { t } = useTranslation('role');
  const { control, onSubmit, isLoading, reset, error } = useRoleCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
        <DialogForm
            open={open}
            isLoading={loadingInitData}
            title={t(title)}
            aria-labelledby={'role-creation-title'}
        >
            <DialogContent>
                {dataError && <HandlerError error={dataError}/>}

                {!dataError && (
                    <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={3}/>}>
                        <RoleForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit}/>
                    </ConditionContainer>
                )}
            </DialogContent>
            <DialogActions>
                <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
                <LoadingButton
                    variant='contained'
                    type={'submit'}
                    loading={isLoading || loadingInitData}
                    disabled={!!dataError}
                    form='form'
                >
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
  );
};

export default memo(RoleCreateModal);
