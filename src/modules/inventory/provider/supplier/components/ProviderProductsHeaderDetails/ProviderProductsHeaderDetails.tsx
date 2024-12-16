import { memo, useMemo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { Box } from '@mui/material';
import { PermissionCheck, RouterTab } from '@dfl/react-security';
import { supplierTabs } from 'modules/inventory/provider/supplier/constants/tabs.supplier.details';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import {
  SupplierDeleteButton,
  SupplierEditButton,
  SupplierViewAsLogisticButton,
} from 'modules/inventory/provider/supplier/components/SupplierDetailActions';
import { LOGISTIC, SUPPLIER } from 'modules/inventory/constants/entities.style';
import { LogisticProvider } from 'modules/inventory/provider/common/constants';
import IconBox from 'modules/inventory/provider/common/components/ProviderAvatarCell/IconBox';
import { SUPPLIER_PERMISSIONS } from '../../constants';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';

const ProviderManufactureHeaderDetails = () => {
  const { isLoading, error, providerProducts, providerProductsId } = useProviderProductsDetail();

  const isLogistic = useMemo(() => providerProducts?.type === LogisticProvider, [providerProducts]);

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={providerProducts?.name || ''}
      subtitle={providerProducts?.contacts?.mainEmail || ''}
      logo={providerProducts?.avatar}
      actions={<Actions />}
      entityStyle={SUPPLIER}
      badge={isLogistic && <IconBox icon={LOGISTIC.ICON} large top={-12} right={-12} />}
    >
      <RouterTab
        tabs={supplierTabs}
        prefix={`/inventory/settings/suppliers/${providerProductsId as string}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ProviderManufactureHeaderDetails);

export const Actions = () => {
  const { providerProducts, isLoading } = useProviderProductsDetail();

  const isLogistic = useMemo(() => {
    if (isLoading) return false;
    return providerProducts?.type === LogisticProvider;
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
