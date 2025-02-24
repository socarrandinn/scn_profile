import { Form, FormSwitchField } from '@dfl/mui-react-common';
import useHomeDeliveryUpdatePriceConfig from 'modules/sales/settings/home-delivery/hooks/useHomeDeliveryUpdatePriceConfig';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  data: IHomeDelivery
};

const GlobalCell = ({ data }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { control } = useForm({
    defaultValues: { global: data?.global }
  });

  const { mutate, isLoading } = useHomeDeliveryUpdatePriceConfig(data);

  const handleSubmit = useCallback(() => {
    mutate(!data?.global as boolean);
  }, [mutate, data?.global]);

  return (
    <Form id='global-config-form' control={control}>
      <FormSwitchField
        onClick={handleSubmit}
        name='global'
        label={t(`global.${data?.location?.type}`)}
        id='global-confirm-form'
        isLoading={isLoading}
      />
    </Form>
  )
};

export default memo(GlobalCell);
