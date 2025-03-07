import { memo } from 'react';
import { Button } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import OrderShippingInfoEditModal from './OrderShippingInfoEditModal';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { useCheckOrderStatus } from 'modules/sales/common/hooks/useCheckOrderStatus';

type OrderShippingEditButtonProps = {
  order: Pick<IOrder, 'shipping' | 'status' | '_id'>;
};

const OrderShippingEditButton = ({ order }: OrderShippingEditButtonProps) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { isPaid } = useCheckOrderStatus(order?.status?.type);

  return (
    <>
      <OrderShippingInfoEditModal open={isOpen} onClose={onClose} initValue={order?.shipping} orderId={order?._id} />
      <Button fullWidth variant={'outlined'} size={'small'} onClick={onOpen} disabled={!isPaid}>
        {t('common:edit')}
      </Button>
    </>
  );
};

export default memo(OrderShippingEditButton);
