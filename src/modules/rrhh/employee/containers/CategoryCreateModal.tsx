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
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import useCategoryCreateForm from 'modules/rrhh/employee/hooks/useCategoryCreateForm';
import { ICategory } from 'modules/rrhh/settings/category/interfaces';

type CategoryCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  dataError?: any;
  initValue?: ICategory;
  loadingInitData?: boolean;
  employeeId?: string | null;
};

const CategoryCreateModal = ({
  open,
  onClose,
  title,
  dataError,
  initValue,
  loadingInitData,
}: CategoryCreateModalProps) => {
  const { t } = useTranslation('employee');
  const { control, onSubmit, isLoading, error, reset } = useCategoryCreateForm(initValue, onClose);

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
            <HandlerError error={error} />
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'user-form'} dark>
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} md={12}>
                  <FormTextField
                    fullWidth
                    autoFocus
                    required
                    name='name'
                    label={t('common:name')}
                    placeholder={t('common:name')}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormTextField
                    fullWidth
                    multiline
                    minRows={3}
                    name='description'
                    label={t('common:description')}
                    placeholder={t('common:description')}
                  />
                </Grid>
              </Grid>
            </Form>
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton variant='contained' type={'submit'} loading={isLoading} form='user-form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(CategoryCreateModal);
