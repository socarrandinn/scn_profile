import { Table } from '@dfl/mui-admin-layout';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { memo } from 'react';

type Props = {
  row: IHomeDelivery | undefined;
};


const CityByProvinceTable = ({ row }: Props) => {
  const { data, isLoading, error } = useFindHomeDeliveryPlaces();

  console.log('row', row);
  return (
    <Table
      key={row?._id}
      data={[row]}
      error={error}
      isLoading={isLoading}
      total={data?.total || 0}
      columns={[]}
      hidePagination
    />
  )
};

export default memo(CityByProvinceTable);
