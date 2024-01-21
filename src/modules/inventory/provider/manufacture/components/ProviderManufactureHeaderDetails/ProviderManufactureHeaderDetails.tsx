import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Box, Button } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { ManufactureDetail } from '../../context/ManufactureDetail';
import { manufacturerTabs } from '../../constants/tabs.manufacture.details';
import { useTranslation } from 'react-i18next';
import DeleteButton from 'components/DeleteAction/DeleteButton';
import UpdateManufacturerState from '../UpdateManufactureState/UpdateManufacturerState';
import { IManufacture } from '../../interfaces';
import EditManufactureAction from '../EditManufactureAction/EditManufactureAction';

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
  const { t } = useTranslation('manufacture');
  return (
    <Box gap={1} display={'flex'}>
      <UpdateManufacturerState currentState={manufacture?.state as boolean} id={manufacture?._id as string} />
      <EditManufactureAction />
      <DeleteButton onDelete={() => {}} isLoading={false} />
    </Box>
  );
};
