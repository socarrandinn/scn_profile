import { memo } from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

type OrderShippingInfoUserButtonProps = {
  owner: string;
};

const OrderShippingUserEditButton = ({ owner }: OrderShippingInfoUserButtonProps) => {
  const { t } = useTranslation('order');

  return (
    <Button href={`/crm/clients/${owner}/general`} fullWidth variant={'outlined'} color={'error'} size={'small'}>
      {t('shipping.editAddressee')}
    </Button>
  );
};

export default memo(OrderShippingUserEditButton);
