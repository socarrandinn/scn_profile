import { Form, FormSwitchField } from '@dfl/mui-react-common';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import useHomeDeliveryUpdatePriceConfig from 'modules/sales/settings/home-delivery/hooks/useHomeDeliveryUpdatePriceConfig';
import { IDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  data: IDelivery
};

const GlobalCell = ({ data }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { control } = useForm({
    defaultValues: { global: data?.global }
  });

  const { mutate, isLoading } = useHomeDeliveryUpdatePriceConfig(data);

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
