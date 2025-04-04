import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid, InputAdornment } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormCustomSwitchField } from 'modules/common/components/IphoneSwitchField';
import { UseFormWatch } from 'react-hook-form';
import { IPage } from '../../interfaces';
import { NoteInfo } from 'modules/common/components/NoteInfo';
import { Link } from '@mui/icons-material';

type PageFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const PageForm = ({ error, control, isLoading, onSubmit }: PageFormProps) => {
  const { t } = useTranslation('page');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='seo.name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              autoFocus
              name='slug'
              label={t('fields.url')}
              helperText={<NoteInfo>{t('noteUrl')}</NoteInfo>}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Link />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={3} name='seo.description' label={t('fields.description')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(PageForm);
