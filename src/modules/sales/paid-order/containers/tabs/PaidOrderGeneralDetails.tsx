import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { PermissionCheck } from '@dfl/react-security';
import { OrderClientInfo } from 'modules/sales/common/components/OrderDetails/OrderClientInfo';
import { OrderInvoiceInfo } from 'modules/sales/common/components/OrderDetails/OrderInvoiceInfo';
import { OrderPaymentInfo } from 'modules/sales/common/components/OrderDetails/OrderPaymentInfo';
import { OrderProductsInfo } from 'modules/sales/common/components/OrderDetails/OrderProductInfo';
import { OrderShippingInfo } from 'modules/sales/common/components/OrderDetails/OrderShippingInfo';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { IncidenceCard } from 'modules/sales/incidence/components/IncidenceCard';
import { INCIDENCE_PERMISSIONS } from 'modules/sales/incidence/constants';
import IncidenceOrderContainer from 'modules/sales/incidence/containers/IncidenceOrderContainer';
import { memo } from 'react';

const PaidOrderGeneralDetails = () => {
  return (
    <DetailLayout mb={3}>
      <DetailContent ghost>
        <OrderShippingInfo isParent />
        <OrderProductsInfo isParent />
      </DetailContent>
      <DetailSummary ghost width={{ md: 400, lg: 450, xl: 500 }}>
        <PermissionCheck permissions={[INCIDENCE_PERMISSIONS.INCIDENCE_VIEW]}>
          <IncidenceOrderContainer />
        </PermissionCheck>

        <PermissionCheck permissions={[ORDER_PERMISSIONS.VIEW_PAYMENT_INFO]}>
          <OrderInvoiceInfo />
        </PermissionCheck>

        <PermissionCheck permissions={[ORDER_PERMISSIONS.VIEW_CUSTOMER_INFO]}>
          <OrderClientInfo />
        </PermissionCheck>

        <PermissionCheck permissions={[ORDER_PERMISSIONS.VIEW_PAYMENT_INFO]}>
          <OrderPaymentInfo />
        </PermissionCheck>
      </DetailSummary>
    </DetailLayout>
  );
};

export default memo(PaidOrderGeneralDetails);
