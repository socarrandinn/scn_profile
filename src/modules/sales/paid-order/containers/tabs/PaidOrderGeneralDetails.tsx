import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { PermissionCheck } from '@dfl/react-security';
import { OrderClientInfo } from 'modules/sales/common/components/OrderDetails/OrderClientInfo';
import { OrderInvoiceInfo } from 'modules/sales/common/components/OrderDetails/OrderInvoiceInfo';
import { OrderLogisticSupplierInfo } from 'modules/sales/common/components/OrderDetails/OrderLogisticSupplierInfo';
import { OrderPaymentInfo } from 'modules/sales/common/components/OrderDetails/OrderPaymentInfo';
import { OrderShippingInfo } from 'modules/sales/common/components/OrderDetails/OrderShippingInfo';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { memo } from 'react';
const PaidOrderGeneralDetails = () => {
  return (
    <DetailLayout mb={3}>
      <DetailContent ghost>
        <OrderShippingInfo isParent />
      </DetailContent>
      <DetailSummary ghost width={{ md: 400, lg: 450, xl: 500 }}>
        <PermissionCheck permissions={[ORDER_PERMISSIONS.VIEW_CUSTOMER_INFO]}>
          <OrderInvoiceInfo />
        </PermissionCheck>

        <OrderClientInfo />
        <OrderPaymentInfo />
        <OrderLogisticSupplierInfo />
      </DetailSummary>
    </DetailLayout>
  );
};

export default memo(PaidOrderGeneralDetails);
