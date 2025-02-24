import { FormEventHandler, memo, useEffect, useMemo } from 'react';
import { Form, FormSwitchField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LocationCostForm from '../LocationCostForm/LocationCostForm';
import { useShippingHomeSettings } from 'modules/sales/settings/home-delivery/contexts';
import { FormAddressAutocompleteCityField, FormAddressAutocompleteStateField } from 'modules/common/components/FormSections/AddressInfoFrom/Fields';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

type DeliveryCreateDestinationFormProps = {
  error: any;
  control: any;
  type?: string | null;
  isLoading: boolean;
  setValue: any;
  watch: any;
  state?: string,
  onSubmit: FormEventHandler | undefined;
};

const DeliveryCreateDestinationForm = ({
  error,
  control,
  state,
  isLoading,
  onSubmit,
  watch,
  setValue,
  type,
}: DeliveryCreateDestinationFormProps) => {
  const { t } = useTranslation('homeDelivery');
  const { settings } = useShippingHomeSettings();

  const stateCode: string = useMemo(() => state || '', [state]);

  return (
    <>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} watch={watch} setValue={setValue} isLoading={isLoading} size={'small'} id={'location-form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            {type === LOCATION_TYPE.COUNTRY &&
              <FormAddressAutocompleteStateField
                required
                name={'location.state'}
                label={t('common:fields.address.state')}
              />}
            {type === LOCATION_TYPE.STATE &&
              <FormAddressAutocompleteStateField
                required
                name={'location.state'}
                label={t('common:fields.address.state')}
              />}
            {type === LOCATION_TYPE.CITY &&
              <FormAddressAutocompleteCityField
                required
                multiple
                disabled={!stateCode}
                name={'location.city'}
                label={t('common:fields.address.city')}
                address={{ state: stateCode }}
              />}
          </Grid>
          <Grid item xs={12}>
            <FormSwitchField name={'global'} label={t(`enabled.${type}`)} />
          </Grid>
          <Grid item xs={12} marginBottom={1}>
            <LocationCostForm name={'customPrice'} data={settings as IHomeDelivery} />
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default memo(DeliveryCreateDestinationForm);
