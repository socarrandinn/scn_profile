import { HeaderSummaryTabs } from 'modules/common/components/HeaderSummaryTabs';
import { memo } from 'react';
import { Box } from '@mui/material';
import { PermissionCheck, RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import { logisticTabs } from 'modules/inventory/provider/logistics/constants/tabs.logistic.details';
import {
  LogisticDeleteButton,
  LogisticEditButton,
  LogisticViewAsSupplierButton,
} from 'modules/inventory/provider/logistics/components/LogisticDetailActions';
import { LOGISTIC } from 'modules/inventory/constants/entities.style';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';
import { LOGISTICS_PERMISSIONS } from '../../constants';
import { useUpdateProviderAvatar } from 'modules/inventory/provider/common/hooks/useUpdateAvatar';

const ProviderLogisticHeaderDetails = () => {
  const { isLoading, error, logistic, logisticId } = useLogisticsDetailContext();

  const { isLoading: isImageLoading, mutate } = useUpdateProviderAvatar(logisticId || '');
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  const onSubmit = (files: any) => {
    mutate(files);
  };

  return (
    <HeaderSummaryTabs
      title={logistic?.name || ''}
      subtitle={logistic?.contacts?.mainEmail || ''}
      logo={logistic?.avatar}
      actions={<Actions />}
      entityStyle={LOGISTIC}
      onImageSubmit={onSubmit}
      isLoadingImage={isImageLoading}
    >
      <RouterTab
        tabs={logisticTabs}
        prefix={`/inventory/settings/logistics/${logisticId as string}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ProviderLogisticHeaderDetails);

export const Actions = () => {
  return (
    <Box gap={1} display={'flex'}>
      <PermissionCheck permissions={[SUPPLIER_PERMISSIONS.SUPPLIER_VIEW]}>
        <LogisticViewAsSupplierButton />
      </PermissionCheck>
      <PermissionCheck permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_WRITE]}>
        <LogisticEditButton />
        <LogisticDeleteButton />
      </PermissionCheck>
    </Box>
  );
};
