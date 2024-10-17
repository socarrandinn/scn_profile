import { memo, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@dfl/mui-react-common';
import { Chip, Stack } from '@mui/material';
import toast from 'react-hot-toast';
import { useOrderValidateShipping } from 'modules/sales/common/hooks/useOrderValidateShipping';
import { useOrderCanEditAfterValidated } from 'modules/sales/common/hooks/useOrderCanEditAfterValidated';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { IShipping } from 'modules/sales/common/interfaces/IOrder';

type OrderBillingInfoValidateProps = {
  orderId: string | undefined;
  currentStatus: IOrderStatus | undefined;
  data: IShipping | undefined;
};

const OrderShippingValidate = ({ data, orderId, currentStatus }: OrderBillingInfoValidateProps) => {
  const { t } = useTranslation('order');
  const { mutate, isLoading, error } = useOrderValidateShipping(orderId);
  const isDisable = useOrderCanEditAfterValidated(currentStatus?.type);

  const handleValidate = useCallback(() => {
    mutate({ isValid: true });
  }, [mutate]);

  useEffect(() => {
    // @ts-ignore
    if (error?.statusCode === 400 || error?.statusCode === 404) {
      toast.error(t('notValidate') || 'Error', { duration: 3000 });
    }
  }, [error, t]);

  const wasValidated = useMemo(() => data?.verification?.isValid, [data?.verification?.isValid]);

  return (
    <>
      {!wasValidated ? (
        <LoadingButton
          disabled={isDisable}
          fullWidth
          variant={'outlined'}
          size={'small'}
          onClick={handleValidate}
          loading={isLoading}
          form='shipping-validate-form'
        >
          {t('shipping.validate')}
        </LoadingButton>
      ) : (
        <Stack sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Chip
            sx={{ height: '100%', width: '100%' }}
            label={t('shipping.validated')}
            size={'small'}
            color={'primary'}
          />
        </Stack>
      )}
    </>
  );
};

export default memo(OrderShippingValidate);
