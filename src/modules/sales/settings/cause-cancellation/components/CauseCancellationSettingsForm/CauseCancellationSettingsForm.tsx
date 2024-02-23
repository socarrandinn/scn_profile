import { Form, FormTextField, FormToggleButtonGroup, HandlerError } from '@dfl/mui-react-common';
import { Grid, ToggleButton } from '@mui/material';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import React, { FormEventHandler, memo } from 'react';
import { useTranslation } from 'react-i18next';

type CauseCancellationSettingsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const CauseCancellationSettingsForm = ({ error, control, isLoading, onSubmit }: CauseCancellationSettingsFormProps) => {
  const { t } = useTranslation('causeCancellation');
  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'cause-cancellation-setting-form'}
        dark
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems='flex-end'>
          <Grid item xs={12} md={4}>
            <FormTextField
              required
              name='maxElapsingTime'
              label={t('fields.maxElapsingTime')}
              type='number'
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FormToggleButtonGroup name='reimbursementCharge.type' exclusive>
              <ToggleButton value={PriceType.FIXED}>{PriceType.FIXED}</ToggleButton>
              <ToggleButton value={PriceType.PERCENT}>{PriceType.PERCENT}</ToggleButton>
            </FormToggleButtonGroup>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormTextField
              required
              name='reimbursementCharge.value'
              label={t('fields.reimbursementCharge.value')}
              type='number'
              inputProps={{ step: 0.01, min: 0 }}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CauseCancellationSettingsForm);
