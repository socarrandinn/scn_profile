import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@dfl/mui-react-common';
import { Chip, Stack } from '@mui/material';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { useCheckOrderStatus } from 'modules/sales/common/hooks/useCheckOrderStatus';
import { useToggle } from '@dfl/hook-utils';
import { useValidatePaidOrder } from 'modules/sales/paid-order/hooks/useValidatePaidOrder';
import { ConfirmDialog } from 'components/ConfirmActions';

type OrderBillingInfoValidateProps = {
  order: Pick<IOrder, 'status' | '_id'>;
};

const OrderShippingValidate = ({ order }: OrderBillingInfoValidateProps) => {
  const { t } = useTranslation('order');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { mutate: onValidate, isLoading, error } = useValidatePaidOrder(order?._id as string, onClose);
  const { isValidated, isPaid } = useCheckOrderStatus(order?.status?.type);

  if (isValidated) {
    return (
      <Stack sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Chip sx={{ height: '100%', width: '100%' }} label={t('shipping.validated')} size={'small'} color={'primary'} />
      </Stack>
    );
  }

  return (
    <>
      <LoadingButton
        disabled={!isPaid}
        fullWidth
        variant={'outlined'}
        size={'small'}
        onClick={onOpen}
        loading={isLoading}
        form='shipping-validate-form'
      >
        {t('shipping.validate')}
      </LoadingButton>

      <ConfirmDialog
        open={isOpen}
        title={t('paidOrder:confirmation.title')}
        onClose={onClose}
        isLoading={isLoading}
        onConfirm={onValidate}
        confirmButtonText={t('paidOrder:confirmation.confirm')}
        confirmationMessage={t('paidOrder:confirmation.confirmation')}
        error={error}
        align='left'
        colorBtn='primary'
      />
    </>
  );
};

export default memo(OrderShippingValidate);
