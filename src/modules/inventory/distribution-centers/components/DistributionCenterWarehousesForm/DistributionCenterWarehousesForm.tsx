import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import WarehouseSelect from 'modules/inventory/warehouse/components/WarehouseSelect/WarehouseSelect';

type DistributionCenterWarehousesFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const DistributionCenterWarehousesForm = ({
  error,
  control,
  isLoading,
  onSubmit,
}: DistributionCenterWarehousesFormProps) => {
  const { t } = useTranslation('distributionCenters');

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'distribution-center-warehouse-form'}
        dark
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <WarehouseSelect multiple required name='warehouses' label={t('fields.warehouses')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(DistributionCenterWarehousesForm);
