import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { ManufactureDetail } from '../../context/ManufactureDetail';
import { manufacturerTabs } from '../../constants/tabs.manufacture.details';
import ManufacturerActionsButtons from '../ManufacturerActionsButtons/ManufacturerActionsButtons';
import { MANUFACTURER } from 'modules/inventory/constants/entities.style';

const ProviderManufactureHeaderDetails = () => {
  const { isLoading, error, manufacture, manufacturerId } = ManufactureDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={manufacture?.name || ''}
      logo={manufacture?.avatar}
      actions={<ManufacturerActionsButtons manufacture={manufacture} />}
      entityStyle={MANUFACTURER}
    >
      <RouterTab
        tabs={manufacturerTabs}
        prefix={`/inventory/settings/manufactures/${manufacturerId as string}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ProviderManufactureHeaderDetails);
