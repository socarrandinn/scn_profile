import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DISPATCH_ERRORS } from '../../constants';

type DispatchFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  isEdit?: boolean;
  isValid: boolean;
};

const DispatchForm = ({ error, control, isLoading, onSubmit, isValid = false }: DispatchFormProps) => {
  const { t } = useTranslation('dispatch');

  return (
    <div>
      <HandlerError error={error} errors={DISPATCH_ERRORS} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} noValidate>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} disabled={isValid} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(DispatchForm);
