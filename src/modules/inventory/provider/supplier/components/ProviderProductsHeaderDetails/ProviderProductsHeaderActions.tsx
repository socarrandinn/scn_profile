import { useMemo } from 'react';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { Box } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { SupplierDeleteButton, SupplierEditButton, SupplierViewAsLogisticButton } from '../SupplierDetailActions';
import { SUPPLIER_PERMISSIONS } from '../../constants';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

const ProviderProductsHeaderActions = () => {
  const { providerProducts, isLoading } = useProviderProductsDetail();

  const isLogistic = useMemo(() => {
    if (isLoading) return false;
    return providerProducts?.type === PROVIDER_TYPE_ENUM.LOGISTIC;
  }, [isLoading, providerProducts?.type]);

  return (
    <Box gap={1} display={'flex'}>
      <PermissionCheck permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_VIEW]}>
        {isLogistic && <SupplierViewAsLogisticButton />}
      </PermissionCheck>
      <PermissionCheck permissions={[SUPPLIER_PERMISSIONS.SUPPLIER_WRITE]}>
        <SupplierEditButton />
        <SupplierDeleteButton />
      </PermissionCheck>
    </Box>
  );
};

export default ProviderProductsHeaderActions;
