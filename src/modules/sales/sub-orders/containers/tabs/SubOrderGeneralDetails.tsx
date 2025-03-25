import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { PermissionCheck } from '@dfl/react-security';
import { OrderClientInfo } from 'modules/sales/common/components/OrderDetails/OrderClientInfo';
import OrderDistributionCenterInfo from 'modules/sales/common/components/OrderDetails/OrderDistributionCenter/OrderDistributionCenterInfo';
import { OrderDriverInfo } from 'modules/sales/common/components/OrderDetails/OrderDriverInfo';
import { OrderProductsInfo } from 'modules/sales/common/components/OrderDetails/OrderProductInfo';
import { OrderShippingInfo } from 'modules/sales/common/components/OrderDetails/OrderShippingInfo';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { INCIDENCE_PERMISSIONS } from 'modules/sales/incidence/constants';
import IncidenceOrderContainer from 'modules/sales/incidence/containers/IncidenceOrderContainer';
import { memo } from 'react';

const SubOrderGeneralDetails = () => {
  return (
    <DetailLayout mb={3}>
      <DetailContent ghost>
        <OrderShippingInfo isParent />
        <OrderProductsInfo />
      </DetailContent>
      <DetailSummary ghost width={{ md: 400, lg: 450, xl: 500 }}>
        <PermissionCheck permissions={[INCIDENCE_PERMISSIONS.INCIDENCE_VIEW]}>
          <IncidenceOrderContainer route='sub-orders' />
        </PermissionCheck>

        <OrderDistributionCenterInfo nm />
        <PermissionCheck permissions={[ORDER_PERMISSIONS.VIEW_CUSTOMER_INFO]}>
          <OrderClientInfo />
        </PermissionCheck>
        <OrderDriverInfo />
      </DetailSummary>
    </DetailLayout>
  );
};

export default memo(SubOrderGeneralDetails);
