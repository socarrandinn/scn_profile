import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type DisallowedWordFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const DisallowedWordForm = ({ error, control, isLoading, onSubmit }: DisallowedWordFormProps) => {
  const { t } = useTranslation('disallowedWord');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark noValidate>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='word' label={t('fields.word')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(DisallowedWordForm);
