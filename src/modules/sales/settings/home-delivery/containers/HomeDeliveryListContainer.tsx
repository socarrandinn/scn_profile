import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { homeDeliveryColumns } from 'modules/sales/settings/home-delivery/constants/home-delivery.columns';
import { HomeDeliveryListToolbar } from 'modules/sales/settings/home-delivery/components/HomeDeliveryListToolbar';
import HomeDeliveryEditModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryEditModal';
import { ConditionContainer } from '@dfl/mui-react-common';
import EmptyLocationContainer from '../../common/containers/EmptyLocationContainer';
import EmptyLocationSkeleton from '../../common/components/EmptyLocations/EmptyLocationsSkeleton';

const HomeDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindHomeDeliveryPlaces();
  if (isLoading) return <EmptyLocationSkeleton />

  return (
    <ConditionContainer active={!data || isLoading} alternative={<EmptyLocationContainer />}>
      <HomeDeliveryListToolbar />
      <Table
        columns={homeDeliveryColumns}
        data={data?.data}
        total={data?.total}
        isLoading={false}
        error={error}
        select
      />
      <HomeDeliveryEditModal />
    </ConditionContainer>
  );
};

export default memo(HomeDeliveryListContainer);
