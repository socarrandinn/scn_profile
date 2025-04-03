import { memo, useMemo } from 'react';
import { HeaderSummaryTabs } from 'modules/common/components/HeaderSummaryTabs';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { supplierTabs } from 'modules/inventory/provider/supplier/constants/tabs.supplier.details';
import HeaderSummaryTabsSkeleton from 'modules/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { LOGISTIC, SUPPLIER } from 'modules/inventory/constants/entities.style';
import { LogisticProvider } from 'modules/inventory/provider/common/constants';
import IconBox from 'modules/inventory/provider/common/components/ProviderAvatarCell/IconBox';
import { useUpdateProviderAvatar } from 'modules/inventory/provider/common/hooks/useUpdateAvatar';
import ProviderProductsHeaderActions from './ProviderProductsHeaderActions';
import { RouterTab } from '@dfl/react-security';

const ProviderManufactureHeaderDetails = () => {
  const { isLoading, error, providerProducts, providerProductsId } = useProviderProductsDetail();
  const isLogistic = useMemo(() => providerProducts?.type === LogisticProvider, [providerProducts]);

  const { isLoading: isImageLoading, mutate } = useUpdateProviderAvatar(providerProductsId || '');

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  const onSubmit = (files: any) => {
    mutate(files);
  };

  return (
    <HeaderSummaryTabs
      title={providerProducts?.name || ''}
      subtitle={providerProducts?.contacts?.mainEmail || ''}
      logo={providerProducts?.avatar}
      actions={<ProviderProductsHeaderActions />}
      entityStyle={SUPPLIER}
      onImageSubmit={onSubmit}
      isLoadingImage={isImageLoading}
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
