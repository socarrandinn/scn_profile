import { memo, useMemo } from 'react';
import { FormSwitchField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LocationCostForm from '../LocationCostForm/LocationCostForm';
import { useShippingHomeSettings } from 'modules/sales/settings/home-delivery/contexts';
import { IDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { LocationCubanForm } from '../LocationCubanForm';
import { LocationInternationalForm } from '../LocationInternationalForm';

type DeliveryCreateDestinationFormProps = {
  type: string | null;
  state: string,
};

const DeliveryCreateDestinationForm = ({
  state,
  type,
}: DeliveryCreateDestinationFormProps) => {
  const { t } = useTranslation('homeDelivery');
  const { settings } = useShippingHomeSettings();
  const stateCode: string = useMemo(() => state || '', [state]);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} mt={1}>
      <Grid item xs={12}>
        {MS_LOCATION_CONFIG.isCuban ? <LocationCubanForm type={type as string} stateCode={stateCode} /> : <LocationInternationalForm type={type as string} />}
      </Grid>
      <Grid item xs={12}>
        <FormSwitchField name={'global'} label={t(`enabled.${type}`)} />
      </Grid>
      <Grid item xs={12} marginBottom={1}>
        <LocationCostForm name={'customPrice'} data={settings as IDelivery} />
      </Grid>
    </Grid>
  );
};

export default memo(DeliveryCreateDestinationForm);
