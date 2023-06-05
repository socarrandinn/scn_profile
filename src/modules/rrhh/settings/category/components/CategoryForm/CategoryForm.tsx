import { FormEventHandler, memo } from 'react';
import { Form, FormFontIconPickerLine, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type CategoryFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  errorValidations?: any;
};

const CategoryForm = ({ error, control, isLoading, onSubmit, errorValidations, ...props }: CategoryFormProps) => {
  const { t } = useTranslation('category');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormFontIconPickerLine name='icon'
                                    previewInLineCount={7}
                                    bgColor={'primary'}
                                    label={t('fields.icon')} required error={errorValidations?.icon} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={3} name='description' label={t('fields.description')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CategoryForm);
