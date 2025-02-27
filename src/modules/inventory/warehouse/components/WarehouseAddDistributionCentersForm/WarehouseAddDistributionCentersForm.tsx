import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DistributionCentersSelect } from 'modules/inventory/distribution-centers/components/DistributionCentersSelect';

type WarehouseAddDistributionCentersFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const WarehouseAddDistributionCentersForm = ({
  error,
  control,
  isLoading,
  onSubmit,
}: WarehouseAddDistributionCentersFormProps) => {
  const { t } = useTranslation('distributionCenters');

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'warehouse-distribution-center-form'}
        dark
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <DistributionCentersSelect required name='distributionCenter' label={t('name')} placeholder={t('select')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(WarehouseAddDistributionCentersForm);
