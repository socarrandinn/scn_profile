import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LogisticsSelect } from 'modules/inventory/provider/logistics/components/LogisticsSelect';

type StoreGeneralProviderFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const StoreGeneralProviderForm = ({ error, control, isLoading, onSubmit }: StoreGeneralProviderFormProps) => {
  const { t } = useTranslation('store');
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-store-provider'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <LogisticsSelect
              multiple={false}
              name={'logistic'}
              label={t('fields.logistic')}
              placeholder={t('fields.logistic')}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(StoreGeneralProviderForm);
