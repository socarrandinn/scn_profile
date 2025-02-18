import { FormEventHandler, memo, useMemo } from 'react';
import { Form, FormSwitchField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { FormSelectProvince } from 'modules/sales-offer/offer/components/FormSelectProvince';
import { useTranslation } from 'react-i18next';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

type DeliveryCreateDestinationFormProps = {
  error: any;
  control: any;
  type?: string | null;
  isLoading: boolean;
  setValue: any;
  onSubmit: FormEventHandler | undefined;
};

const DeliveryCreateDestinationForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  type,
}: DeliveryCreateDestinationFormProps) => {
  const { t } = useTranslation('homeDelivery');

  return (
    <>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormSelectProvince name={`location.${type}`} multiple label={t('product:provinces')} />
          </Grid>
          <Grid item xs={12}>
            <FormSwitchField name={`enabled.${type}`} label={t(`enabled.${type}`)} />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(event) => {
                    PROVINCES.forEach(({ state }) => setValue(state, event.target.checked));
                  }}
                  defaultChecked={false}
                />
              }
              label={'Toda Cuba'}
            />
          </Grid>
          {!isLoading &&
            PROVINCES.map((province) => (
              <Grid item xs={12} md={6} key={province.state}>
                <FormCheckBoxField name={province.state} label={province.name} />
              </Grid>
            ))} */}
        </Grid>
      </Form>
    </>
  );
};

export default memo(DeliveryCreateDestinationForm);
