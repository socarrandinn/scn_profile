import { CompensationType, Frequency, PaymentType } from 'modules/store/employee/management/constants/compensation';

export type ICompensation = {
  dateActivated: Date;

  endActivated?: Date;

  type: CompensationType;

  paymentType: PaymentType;

  value: number;

  frequency: Frequency;

  changeReason?: string | null;

  notes?: string;

  active: boolean;
};
