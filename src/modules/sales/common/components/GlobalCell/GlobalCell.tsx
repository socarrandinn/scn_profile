import { Form, FormSwitchField } from '@dfl/mui-react-common';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import useDeliveryUpdatePriceConfig from 'modules/sales/settings/common/hooks/useDeliveryUpdatePriceConfig';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  data: IDelivery;
};

const GlobalCell = ({ data }: Props) => {
  const { t } = useTranslation('homeDelivery');

  const { control } = useForm({
    defaultValues: { global: data?.global }
  });

  const { mutate, isLoading } = useDeliveryUpdatePriceConfig(data?._id as string, data?.space);

  const handleSubmit = useCallback(() => {
    mutate(!data?.global);
  }, [mutate, data?.global]);

  if (!data || data?.location?.type === LOCATION_TYPE.CITY) return <></>

  return (
    <Form id='global-config-form' control={control}>
      <FormSwitchField
        onClick={handleSubmit}
        name='global'
        label={t('fields.global')}
        id='global-confirm-form'
        isLoading={isLoading}
      />
    </Form>
  )
};

export default memo(GlobalCell);
