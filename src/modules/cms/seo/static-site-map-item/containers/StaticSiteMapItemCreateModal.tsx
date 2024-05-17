import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useStaticSiteMapItemCreateForm from 'modules/cms/seo/static-site-map-item/hooks/useStaticSiteMapItemCreateForm';
import { IStaticSiteMapItem } from 'modules/cms/seo/static-site-map-item/interfaces';
import { StaticSiteMapItemForm, StaticSiteMapItemFormSkeleton } from 'modules/cms/seo/static-site-map-item/components/StaticSiteMapItemForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';

type StaticSiteMapItemCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IStaticSiteMapItem;
  onClose: () => void;
};
const StaticSiteMapItemCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: StaticSiteMapItemCreateModalProps) => {
  const { t } = useTranslation('staticSiteMapItem');
  const { control, onSubmit, isLoading, reset, error } = useStaticSiteMapItemCreateForm(onClose, initValue);
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
      aria-labelledby={'staticSiteMapItem-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<StaticSiteMapItemFormSkeleton />}>
            <StaticSiteMapItemForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(StaticSiteMapItemCreateModal);
