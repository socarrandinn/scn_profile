import { FormEventHandler, memo } from 'react';
import { Form, FormSwitchField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LocationCostForm from '../LocationCostForm/LocationCostForm';
import { useShippingHomeSettings } from 'modules/sales/settings/home-delivery/contexts';
import { FormAddressAutocompleteStateField } from 'modules/common/components/FormSections/AddressInfoFrom/Fields';
import { addressFieldPath } from 'utils/address';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';

type DeliveryCreateDestinationFormProps = {
  error: any;
  control: any;
  type?: string | null;
  isLoading: boolean;
  setValue: any;
  watch: any;
  onSubmit: FormEventHandler | undefined;
};

const DeliveryCreateDestinationForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  watch,
  setValue,
  type,
}: DeliveryCreateDestinationFormProps) => {
  const { t } = useTranslation('homeDelivery');
  const { settings } = useShippingHomeSettings();

  return (
    <>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} watch={watch} setValue={setValue} isLoading={isLoading} size={'small'} id={'location-form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormAddressAutocompleteStateField
              required
              name={addressFieldPath('state', 'location')}
              label={t('common:fields.address.state')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormSwitchField name={`global`} label={t(`enabled.${type}`)} />
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
