import { memo } from 'react';
import { Button } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import OrderShippingInfoEditModal from './OrderShippingInfoEditModal';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { IShipping } from 'modules/sales/common/interfaces/IOrder';
import { useOrderCanEditAfterValidated } from 'modules/sales/common/hooks/useOrderCanEditAfterValidated';

type OrderShippingEditButtonProps = {
  orderId: string | undefined;
  currentStatus: IOrderStatus | undefined;
  data: IShipping | undefined;
};

const OrderShippingEditButton = ({ orderId, data, currentStatus }: OrderShippingEditButtonProps) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useToggle(false);
  const isDisabled = useOrderCanEditAfterValidated(currentStatus?.type);

  return (
    <>
      <OrderShippingInfoEditModal open={isOpen} onClose={onClose} initValue={data} orderId={orderId} />
      <Button fullWidth variant={'outlined'} size={'small'} onClick={onOpen} disabled={isDisabled}>
        {t('common:edit')}
      </Button>
    </>
  );
};

export default memo(OrderShippingEditButton);
