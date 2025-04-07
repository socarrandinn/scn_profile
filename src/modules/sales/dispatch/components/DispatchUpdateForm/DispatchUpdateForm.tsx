import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DispatchSelect } from '../DispatchSelect';

type DispatchFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  setValue: any;
  onSubmit: FormEventHandler | undefined;
};

const DispatchUpdateForm = ({ error, control, isLoading, onSubmit }: DispatchFormProps) => {
  const { t } = useTranslation('dispatch');

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'dispatch-update-form'}
        noValidate
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <DispatchSelect required name='dispatch' label={t('dispatch:list')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(DispatchUpdateForm);
