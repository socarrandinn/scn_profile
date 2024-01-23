import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Box } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { ManufactureDetail } from '../../context/ManufactureDetail';
import { manufacturerTabs } from '../../constants/tabs.manufacture.details';
import ManufactureStatePicker from 'modules/inventory/provider/manufacture/components/ManufactureStatePicker/ManufactureState';
import { IManufacture } from '../../interfaces';
import EditManufactureAction from '../EditManufactureAction/EditManufactureAction';
import DeleteManufactureAction from '../DeleteManufactureAction/DeleteManufactureAction';

const ProviderManufactureHeaderDetails = () => {
  const { isLoading, error, manufacture, manufacturerId } = ManufactureDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={manufacture?.name || ''}
      logo={manufacture?.avatar?.url}
      actions={<Actions manufacture={manufacture} />}
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

interface IActions {
  manufacture: IManufacture | undefined;
}

export const Actions = ({ manufacture }: IActions) => {
  return (
    <Box gap={1} display={'flex'} alignItems={'center'}>
      <ManufactureStatePicker value={manufacture?.state || false} rowId={manufacture?._id || ''} />
      <EditManufactureAction />
      <DeleteManufactureAction />
    </Box>
  );
};
