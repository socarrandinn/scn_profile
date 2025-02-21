import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { HomeDeliveryListToolbar } from 'modules/sales/settings/home-delivery/components/HomeDeliveryListToolbar';
import HomeDeliveryEditModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryEditModal';
import { ConditionContainer } from '@dfl/mui-react-common';
import EmptyLocationContainer from '../../common/containers/EmptyLocationContainer';
import EmptyLocationSkeleton from '../../common/components/EmptyLocations/EmptyLocationsSkeleton';
import { shippingColumns } from '../../common/constants/shipping-columns';
import { IHomeDelivery } from '../interfaces';
import { CityByProvinceTable } from '../../common/components/CityByProvinceTable';

const renderSubTable = (row: IHomeDelivery | undefined, index: number) => {
  return <CityByProvinceTable key={index} row={row} />;
};

const HomeDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindHomeDeliveryPlaces();

  if (isLoading) return <EmptyLocationSkeleton />

  return (
    <ConditionContainer active={data?.data?.length} alternative={<EmptyLocationContainer />}>
      <HomeDeliveryListToolbar />
      <Table
        columns={shippingColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        renderCollapsibleRowContent={renderSubTable}
      />
      <HomeDeliveryEditModal />
    </ConditionContainer>
  );
};

export default memo(HomeDeliveryListContainer);
