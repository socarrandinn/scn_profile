import { memo } from 'react';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { supplierTabs } from 'modules/inventory/provider/supplier/constants/tabs.supplier.details';
import SupplierRoutes from 'modules/inventory/provider/supplier/routes/supplier-tabs.router';
const ProviderProductsDetailContent = () => {
  const { id } = useParams();
  return (
        <Box pt={1}>
            <TabsHeader>
                <RouterTab tabs={supplierTabs} prefix={`/provider/products/${id as string}`} translationNs={'account'}/>
            </TabsHeader>
            <Box>
                <RouteLoader routes={SupplierRoutes}
                             notfoundRedirect={`/provider/products/${id as string}/general`}/>
            </Box>
        </Box>
  )
}
export default memo(ProviderProductsDetailContent);
