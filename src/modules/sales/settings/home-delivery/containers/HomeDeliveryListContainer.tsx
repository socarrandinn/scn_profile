import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { homeDeliveryColumns } from 'modules/sales/settings/home-delivery/constants/home-delivery.columns';
import { HomeDeliveryListToolbar } from 'modules/sales/settings/home-delivery/components/HomeDeliveryListToolbar';
import HomeDeliveryEditModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryEditModal';
import { ConditionContainer } from '@dfl/mui-react-common';
import { EmptyLocations } from '../components/EmptyLocations';

const HomeDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindHomeDeliveryPlaces();

  return (
    <ConditionContainer active={isLoading || !data} alternative={<EmptyLocations />}>
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
