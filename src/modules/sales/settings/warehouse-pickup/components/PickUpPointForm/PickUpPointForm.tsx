import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AddressInput } from 'modules/common/components/Address';

type PickUpPointFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  watch: any;
};

const PickUpPointForm = ({ error, control, isLoading, onSubmit, watch }: PickUpPointFormProps) => {
  const { t } = useTranslation('warehousePickup');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'place-form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('common:name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              required
              name='time'
              label={t('pickupPoint.time')}
              type={'number'}
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <AddressInput required name={'location'} stateValue={watch('location.state')} hideZip />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(PickUpPointForm);
