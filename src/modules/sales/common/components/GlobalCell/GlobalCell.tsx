import { Form, FormSwitchField } from '@dfl/mui-react-common';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import useDeliveryUpdatePriceConfig from 'modules/sales/settings/common/hooks/useDeliveryUpdatePriceConfig';
import { DELIVERY_SERVICE, IDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  data: IDelivery;
  service: DELIVERY_SERVICE;
};

const GlobalCell = ({ data, service }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { control } = useForm({
    defaultValues: { global: data?.global }
  });

  const { mutate, isLoading } = useDeliveryUpdatePriceConfig(service, data);

  const handleSubmit = useCallback(() => {
    mutate(!data?.global);
  }, [mutate, data?.global]);

  return (
    <Form id='global-config-form' control={control}>
      <FormSwitchField
        onClick={handleSubmit}
        name='global'
        label={t(`global.${data?.location?.type as LOCATION_TYPE}`)}
        id='global-confirm-form'
        isLoading={isLoading}
      />
    </Form>
  )
};

export default memo(GlobalCell);
