import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ProvinceSelect2 } from 'modules/common/components/ZoneSelect/ProvinceSelect2';

type StoreGeneralLocationsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const StoreGeneralLocationsForm = ({ error, control, isLoading, onSubmit }: StoreGeneralLocationsFormProps) => {
  const { t } = useTranslation('store');
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-store-locations'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <ProvinceSelect2
              multiple
              name={'locations'}
              label={t('fields.locations')}
              placeholder={t('common:provincePlaceholder')}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(StoreGeneralLocationsForm);
