import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useStaticSiteMapItemCreateForm from '../hooks/useStaticSiteMapItemCreateForm';
import { IStaticSiteMapItem } from '../interfaces';
import StaticSiteMapItemForm from '../components/StaticSiteMapItemForm/StaticSiteMapItemForm';
import StaticSiteMapItemFormSkeleton from '../components/StaticSiteMapItemForm/StaticSiteMapItemFormSkeleton';

type MessageCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IStaticSiteMapItem;
  onClose: () => void;
};
const MessageCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: MessageCreateModalProps) => {
  const { t } = useTranslation('seo');
  const { control, onSubmit, isLoading, reset, error } = useStaticSiteMapItemCreateForm(initValue, onClose);
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
      aria-labelledby={'message-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<StaticSiteMapItemFormSkeleton />}>
            <StaticSiteMapItemForm dark form='static-site-map-update-form' error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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
          form='static-site-map-update-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(MessageCreateModal);
