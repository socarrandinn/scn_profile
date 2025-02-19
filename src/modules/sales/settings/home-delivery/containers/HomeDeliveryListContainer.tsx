import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { homeDeliveryColumns } from 'modules/sales/settings/home-delivery/constants/home-delivery.columns';
import { HomeDeliveryListToolbar } from 'modules/sales/settings/home-delivery/components/HomeDeliveryListToolbar';
import HomeDeliveryEditModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryEditModal';
import { ConditionContainer } from '@dfl/mui-react-common';
import { EmptyLocations } from '../../common/components/EmptyLocations';
import { useShippingHomeSettings } from '../contexts';
import { DeliveryDisabled } from '../../common/components/DeliveryDisabled';

const HomeDeliveryListContainer = () => {
  const { settings } = useShippingHomeSettings();
  const { isLoading, error, data } = useFindHomeDeliveryPlaces();

  return (
    <ConditionContainer active={isLoading || !data} alternative={settings?.enabled ? <EmptyLocations /> : <DeliveryDisabled />}>
      <HomeDeliveryListToolbar />
      <Table
        columns={homeDeliveryColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <HomeDeliveryEditModal />
    </ConditionContainer>
  );
};

export default memo(HomeDeliveryListContainer);
