import { useMemo } from 'react';

export const useVerifyFraud = (
  payment?: any, // todo IPayment definir
  onlyErrors: boolean = false,
): {
  color: 'error' | 'success' | 'warning' | undefined;
  isActive: boolean;
  value?: any; // todo PaymentInformation definir;
} => {
  const color = useMemo(() => {
    switch (payment?.information?.fraudCatName) {
      case 'FRAUD':
        return 'error';
      case 'SUSPICIOUS':
        return onlyErrors ? 'error' : 'warning';
      default:
        return !onlyErrors ? 'success' : undefined;
    }
  }, [onlyErrors, payment?.information?.fraudCatName]);

  return {
    value: payment?.information,
    color,
    isActive:
      !!payment?.information?.fraudCatName &&
      (onlyErrors ? !['NO_FRAUD'].includes(payment?.information?.fraudCatName) : true),
  };
};
