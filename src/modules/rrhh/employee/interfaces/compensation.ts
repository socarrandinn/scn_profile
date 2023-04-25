import { CompensationType, Frequency, PaymentType } from 'modules/rrhh/employee/constants/compensation';

export type ICompensation = {
  dateActivated: Date;

  endActivated?: Date;

  type: CompensationType;

  paymentType: PaymentType;

  value: number;

  frequency: Frequency;

  changeReason?: string;

  notes?: string;

  active: boolean;
}
