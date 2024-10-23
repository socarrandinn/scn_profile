import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useDisallowedWordCreateForm from 'modules/crm/settings/disallowed-word/hooks/useDisallowedWordCreateForm';
import { IDisallowedWord } from 'modules/crm/settings/disallowed-word/interfaces';
import {
  DisallowedWordForm,
  DisallowedWordFormSkeleton,
} from 'modules/crm/settings/disallowed-word/components/DisallowedWordForm';

type DisallowedWordCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IDisallowedWord;
  onClose: () => void;
};
const DisallowedWordCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: DisallowedWordCreateModalProps) => {
  const { t } = useTranslation('disallowedWord');
  const { control, onSubmit, isLoading, reset, error } = useDisallowedWordCreateForm(onClose, initValue);
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
      aria-labelledby={'disallowedWord-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<DisallowedWordFormSkeleton />}>
            <DisallowedWordForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(DisallowedWordCreateModal);
