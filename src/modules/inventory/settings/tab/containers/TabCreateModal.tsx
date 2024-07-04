import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useTabCreateForm from 'modules/inventory/settings/tab/hooks/useTabCreateForm';
import { ITab } from 'modules/inventory/settings/tab/interfaces';
import { TabForm, TabFormSkeleton } from 'modules/inventory/settings/tab/components/TabForm';
import { TAB_ERRORS } from 'modules/inventory/settings/tab/constants';
import { mapGetOneErrors } from 'constants/errors';

type TabCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ITab;
  onClose: () => void;
};
const TabCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: TabCreateModalProps) => {
  const { t } = useTranslation('tab');
  const { control, onSubmit, isLoading, reset, error } = useTabCreateForm(onClose, initValue);
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
      aria-labelledby={'tab-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<TabFormSkeleton />}>
            <TabForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
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

export default memo(TabCreateModal);
