import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useCategoryCreateForm from 'modules/store/settings/category/hooks/useCategoryCreateForm';
import { ICategory } from 'modules/store/settings/category/interfaces';
import { CategoryForm, CategoryFormSkeleton } from 'modules/store/settings/category/components/CategoryForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';

type CategoryCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ICategory;
  onClose: () => void;
};
const CategoryCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: CategoryCreateModalProps) => {
  const { t } = useTranslation('category');
  const { control, onSubmit, isLoading, reset, error } = useCategoryCreateForm(onClose, initValue);
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
      aria-labelledby={'category-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<CategoryFormSkeleton />}>
            <CategoryForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(CategoryCreateModal);
