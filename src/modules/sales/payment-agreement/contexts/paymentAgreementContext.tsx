import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';

import { useFindOnePaymentAgreement } from '../hooks/useFindOnePaymentAgreement';
import { IPaymentAgreement } from '../interfaces';
// Data value of the provider context
type PaymentAgreementContextValue = {
  value?: any;
  paymentAgreement?: IPaymentAgreement;
  error?: any;
  isLoading?: boolean;
  paymentAgreementId?: string;
};
// default value of the context
const defaultValue: PaymentAgreementContextValue = {};

// create context
const PaymentAgreementContext = createContext<PaymentAgreementContextValue>(defaultValue);

// Proptypes of Provider component
type PaymentAgreementContextProps = ChildrenProps & {
  children: any;
  paymentAgreementId: string;
};

/**
 * Provider component
 * */
const PaymentAgreementProvider = ({ paymentAgreementId, ...props }: PaymentAgreementContextProps) => {
  const { data: paymentAgreement, error, isLoading } = useFindOnePaymentAgreement(paymentAgreementId);
  return (
    <PaymentAgreementContext.Provider value={{ paymentAgreement, error, isLoading, paymentAgreementId }} {...props} />
  );
};

// Default hook to retrieve context data
const usePaymentAgreementDetail = () => {
  const context = useContext(PaymentAgreementContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { PaymentAgreementProvider, usePaymentAgreementDetail };
