import { Form } from '@dfl/mui-react-common';
import { Box, Grid } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { WarehouseSelectSupplierAvailable } from '../WarehouseSelectSupplierAvailable';
import { useWatch } from 'react-hook-form';
import { FormCommissionField } from '../../../common/components/Fields/FormCommissionField';

type WarehouseSupplierFormProps = {
  onSubmit: any;
  control: any;
  isLoading: boolean;
  readOnly?: boolean;
};

const WarehouseSupplierForm = ({ control, isLoading, readOnly, onSubmit }: WarehouseSupplierFormProps) => {
  const { t } = useTranslation('warehouse');
  const { warehouse } = useWatch({ control });

  return (
    <Box mt={2}>
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'warehouse-supplier-form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12}>
            <WarehouseSelectSupplierAvailable
              name='supplier'
              label={t('warehouse:availableSupplier.fields.supplier')}
              warehouse={warehouse}
              readOnly={readOnly}
              disabled={readOnly}
            />
          </Grid>

          <Grid item xs={12}>
            <FormCommissionField
              fullWidth
              name='priceConfig'
              label={t('warehouse:availableSupplier.fields.commission')}
            />
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};

export default memo(WarehouseSupplierForm);
