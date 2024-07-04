import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useTagsCreateForm from 'modules/inventory/settings/tags/hooks/useTagsCreateForm';
import { ITags } from 'modules/inventory/settings/tags/interfaces';
import { TagsForm, TagsFormSkeleton } from 'modules/inventory/settings/tags/components/TagsForm';
import { TAGS_ERRORS } from 'modules/inventory/settings/tags/constants';
import { mapGetOneErrors } from 'constants/errors';

type TagsCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ITags;
  onClose: () => void;
};
const TagsCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: TagsCreateModalProps) => {
  const { t } = useTranslation('tags');
  const { control, onSubmit, isLoading, reset, error } = useTagsCreateForm(onClose, initValue);
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
      aria-labelledby={'tags-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<TagsFormSkeleton />}>
            <TagsForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(TagsCreateModal);
