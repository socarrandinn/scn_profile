import { PaymentAgreementRowActions } from 'modules/sales/payment-agreement/components/PaymentAgreementRowActions';
import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IPaymentAgreement } from 'modules/sales/payment-agreement/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { PAYMENT_AGREEMENT_PERMISSIONS } from 'modules/sales/payment-agreement/constants/payment-agreement.permissions';
import { ReactLink } from '@dfl/react-security';
import { PAYMENT_AGREEMENT_ROUTE } from './payment-agreement-route';
import PaymentAgreementSubOrderRowActions from '../components/PaymentAgreementRowActions/PaymentAgreementSubOrderRowActions';

export const paymentAgreementNameColumn: HeadCell<IPaymentAgreement> = {
  field: 'name',
  headerName: 'dispatch:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IPaymentAgreement) => (
    <ReactLink to={PAYMENT_AGREEMENT_ROUTE.DETAIL(data?._id as string)} underline='hover'>
      {name}
    </ReactLink>
  ),
};

export const paymentAgreementDescriptionColumn: HeadCell<IPaymentAgreement> = {
  field: 'description',
  headerName: 'paymentAgreement:fields.description',
};
export const driverColumn: HeadCell<IPaymentAgreement> = {
  field: 'driver',
  headerName: 'paymentAgreement:fields.driver',
};
export const quantityOrdersColumn: HeadCell<IPaymentAgreement> = {
  field: 'quantityOrders',
  headerName: 'paymentAgreement:fields.quantityOrders',
  type: CellType.NUMBER,
  align: CellAlign.CENTER,
};
export const shippingCostColumn: HeadCell<IPaymentAgreement> = {
  field: 'shippingCost',
  headerName: 'paymentAgreement:fields.shippingCost',
  type: CellType.CURRENCY,
};
export const sendDateColumn: HeadCell<IPaymentAgreement> = {
  field: 'sendDate',
  headerName: 'paymentAgreement:fields.sendDate',
  type: CellType.DATE,
};

export const paymentAgreementActionsColumn: HeadCell<IPaymentAgreement> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: PAYMENT_AGREEMENT_PERMISSIONS.PAYMENT_AGREEMENT_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: PaymentAgreementRowActions,
};

export const paymentAgreementSubOrderActionsColumn: HeadCell<IPaymentAgreement> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: PAYMENT_AGREEMENT_PERMISSIONS.PAYMENT_AGREEMENT_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: PaymentAgreementSubOrderRowActions,
};

// by payment agreement list
export const paymentAgreementColumns: Array<HeadCell<any>> = [
  paymentAgreementNameColumn,
  driverColumn,
  quantityOrdersColumn,
  shippingCostColumn,
  // todo status
  sendDateColumn,
  createdATColumn,
  paymentAgreementActionsColumn,
];

// by details payment agreement suborder list
export const paymentAgreementSubOrderColumns = (subOrderColumn: any[]) => [
  ...subOrderColumn,
  paymentAgreementSubOrderActionsColumn,
];
