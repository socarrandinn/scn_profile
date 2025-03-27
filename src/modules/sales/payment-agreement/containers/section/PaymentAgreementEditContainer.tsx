import { memo, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { pick } from 'lodash';
import { usePaymentAgreementDetail } from '../../contexts/paymentAgreementContext';
import { useToggle } from '@dfl/hook-utils';
import { PAYMENT_AGREEMENT_PERMISSIONS } from '../../constants';
import PaymentAgreementUpdateContainer from './PaymentAgreementUpdateContainer';
import { initPaymentAgreementValues } from '../../hooks/usePaymentAgreementCreateForm';
import { IPaymentAgreement, PaymentAgreementDTO } from '../../interfaces';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { CurrencyValue, DateValue } from '@dfl/mui-react-common';

const PaymentAgreementEditContainer = () => {
  const { t } = useTranslation('paymentAgreement');
  const { onClose, onToggle, isOpen } = useToggle(false);
  const { isLoading, paymentAgreement, error } = usePaymentAgreementDetail();

  const _initValue: Omit<PaymentAgreementDTO, 'filters'> = useMemo(
    () =>
      pick(
        {
          ...initPaymentAgreementValues,
          ...(paymentAgreement as IPaymentAgreement),
        },
        ['_id', 'name', 'sendDate', 'driver', 'shippingCost', 'estimatedShippingCost', 'maxShippingCost'],
      ),
    [paymentAgreement],
  );

  if (isOpen) {
    return (
      <FormPaper
        title={t('paymentAgreement:name')}
        subtitle={t('paymentAgreement:helpText')}
        actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
      >
        <PaymentAgreementUpdateContainer
          initValue={_initValue}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      title={t('name')}
      subtitle={t('helpText')}
      actions={
        <FormPaperAction
          onToggle={onToggle}
          open={isOpen}
          permissions={PAYMENT_AGREEMENT_PERMISSIONS.PAYMENT_AGREEMENT_WRITE}
        />
      }
    >
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(paymentAgreement as IPaymentAgreement) || []}
        isLoading={isLoading}
        error={error}
        minWidth={{ md: 280, lg: 280, xl: 350 }}
      />
    </FormPaper>
  );
};

export default memo(PaymentAgreementEditContainer);

const getArray = (data: IPaymentAgreement): any[] => {
  const { name, driver, sendDate, shippingCost, estimatedShippingCost, quantityOrders, maxShippingCost } = data || {};

  const array = [
    { label: 'paymentAgreement:fields.name', value: name },
    { label: 'paymentAgreement:fields.quantityOrders', value: quantityOrders },
    { label: 'paymentAgreement:fields.driver', value: driver },
    { label: 'paymentAgreement:fields.shippingCost', value: <CurrencyValue value={shippingCost} /> },
    {
      label: 'paymentAgreement:fields.estimatedShippingCost',
      value: <CurrencyValue value={estimatedShippingCost ?? 0} />,
    },
    {
      label: 'paymentAgreement:fields.maxShippingCost',
      value: <CurrencyValue value={maxShippingCost ?? 0} />,
    },
    { label: 'paymentAgreement:fields.sendDate', value: <DateValue value={sendDate} /> },
  ];
  return array;
};
