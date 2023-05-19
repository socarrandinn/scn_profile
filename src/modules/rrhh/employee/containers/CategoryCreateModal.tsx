import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Grid } from '@mui/material';
import {
  ConditionContainer,
  DialogForm,
  Form,
  FormDatePickerField,
  FormTextField,
  HandlerError,
  LoadingButton,
  SkeletonForm,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import useCategoryCreateForm from 'modules/rrhh/employee/hooks/useCategoryCreateForm';
import { SelectCategory } from 'modules/rrhh/settings/category/components/SelectCategory';
import { IEmployeeCategory } from 'modules/rrhh/employee/interfaces';

type CategoryCreateModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  dataError?: any;
  initValue?: IEmployeeCategory;
  loadingInitData?: boolean;
  employeeId?: string | null;
};

const CategoryCreateModal = ({ open, onClose, title, dataError }: CategoryCreateModalProps) => {
  const { t } = useTranslation('employee');
  const { control, onSubmit, isLoading, error, reset } = useCategoryCreateForm(onClose);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
        <DialogForm
            open={open}
            onClose={handleClose}
            title={t(title)}
            aria-labelledby={'user-creation-title'}
        >
            <DialogContent>
                <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors}/>
                {!dataError && (<>
                        <HandlerError error={error}/>
                        <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'}
                              id={'user-form'} dark>
                            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={12}>
                                    <FormDatePickerField
                                        fullWidth
                                        required
                                        name='dateActivated'
                                        label={t('fields.categories.dateActivated')}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <SelectCategory
                                        required
                                        name='category'
                                        label={t('fields.categories.category')}
                                        placeholder={t('fields.categories.categoryPlaceholder')}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <FormTextField
                                        fullWidth
                                        multiline
                                        minRows={3}
                                        name='notes'
                                        label={t('fields.categories.notes')}
                                        placeholder={t('fields.categories.notes')}
                                    />
                                </Grid>
                            </Grid>
                        </Form>
                    </>
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
