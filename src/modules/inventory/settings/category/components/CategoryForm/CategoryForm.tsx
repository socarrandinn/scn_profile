import { FormEventHandler, memo } from 'react';
import {
  Form,
  FormColorPicker,
  FormFontIconPickerLine,
  FormLabel,
  FormTextField,
  HandlerError,
} from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CategorySelect } from 'modules/inventory/settings/category/components/CategorySelect';
import { ImageCategory } from '../CategoryUpdateImage';
import { useWatch } from 'react-hook-form';

type CategoryFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const CategoryForm = ({ error, control, isLoading, onSubmit }: CategoryFormProps) => {
  const { t } = useTranslation('category');
  const categoryId: string = useWatch({ control, name: '_id' });

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'CategoryForm'} dark>
        <Grid
          container
          spacing={{
            xs: 1,
            md: 2,
          }}
          columns={{
            xs: 4,
            sm: 8,
            md: 12,
          }}
        >
          <Grid item xs={12} justifyContent='center' display='flex'>
            {
              categoryId && <ImageCategory category={categoryId} />
              /*  <FormUploadImage name={'image'} size={100} variant={'square'} hook={useUploadCategoryImage}>
                <NoFoodIcon fontSize='small' />
              </FormUploadImage> */
            }
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormColorPicker fullWidth required name='color' label={t('fields.color')} />
          </Grid>
          <Grid item xs={12}>
            <FormLabel label={t('fields.icon')} required />
            <FormFontIconPickerLine fullWidth required name='icon' label={t('fields.icon')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={3} name='description' label={t('fields.description')} />
          </Grid>
          <Grid item xs={12}>
            <CategorySelect name='parent' label={t('fields.parent')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CategoryForm);
