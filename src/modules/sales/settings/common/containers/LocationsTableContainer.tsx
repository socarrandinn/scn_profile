import DeliveryContainerTable, { TableProps } from 'modules/sales/settings/common/containers/DeliveryContainerTable';
import EmptyLocationSkeleton from '../components/EmptyLocations/EmptyLocationsSkeleton';
import { ConditionContainer } from '@dfl/mui-react-common';
import EmptyHomeDeliveryContainer from '../../home-delivery/containers/EmptyHomeDeliveryContainer';
import { HomeDeliveryListToolbar } from '../../home-delivery/components/HomeDeliveryListToolbar';
import { HomeDeliverySubTable } from '../../home-delivery/components/HomeDeliverySubTable';
import { memo } from 'react';

const LocationsTableContainer = ({ isLoading, error, data, columns }: TableProps) => {
  if (isLoading) return <EmptyLocationSkeleton />

  return (
    <>
      <ConditionContainer active={data?.data?.length > 0} alternative={<EmptyHomeDeliveryContainer />}>
        <HomeDeliveryListToolbar />
        <DeliveryContainerTable
          data={data}
          error={error}
          renderSubTable={HomeDeliverySubTable}
          columns={columns || []}
          isLoading={isLoading}
        />
      </ConditionContainer>
    </>
  );
};

export default memo(LocationsTableContainer);
