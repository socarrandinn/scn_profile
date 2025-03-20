import { memo, useMemo } from 'react';
import { FormSwitchField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LocationCostForm from '../LocationCostForm/LocationCostForm';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';
import { LocationCubanForm } from '../LocationCubanForm';
import { LocationInternationalForm } from '../LocationInternationalForm';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { ExpressLocationForm } from '../ExpressLocationForm';
import { useSearchParamsChange } from '@dfl/react-security';
import { useFindShippingSettings } from 'modules/sales/settings/home-delivery/hooks/useFindShippingSettings';

type DeliveryCreateDestinationFormProps = {
  type: string | null;
  state: string;
  settings: IDelivery;
};

const DeliveryCreateDestinationForm = ({ state, settings, type }: DeliveryCreateDestinationFormProps) => {
  const { t } = useTranslation('homeDelivery');
  const stateCode: string = useMemo(() => state || '', [state]);
  const { value } = useSearchParamsChange('ruleId');
  const { data } = useFindShippingSettings(value as string);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} mt={1}>
      <Grid item xs={12}>
        {ADDRESS_COUNTRY_CODE === 'CU' ? (
          <LocationCubanForm type={type as string} stateCode={stateCode} />
        ) : (
          <LocationInternationalForm type={type as string} />
        )}
      </Grid>
      {type !== LOCATION_TYPE.CITY && (
        <Grid item xs={12}>
          <FormSwitchField name={'global'} label={t(`enabled.${type as string}`)} />
        </Grid>
      )}
      <Grid item xs={12} marginBottom={1}>
        <LocationCostForm name={'customPrice'} global={settings} data={data?.data?.[0]} />
      </Grid>
      <Grid item xs={12} marginBottom={1}>
        <ExpressLocationForm global={settings} data={data?.data?.[0]} />
      </Grid>
    </Grid>
  );
};

export default memo(DeliveryCreateDestinationForm);
