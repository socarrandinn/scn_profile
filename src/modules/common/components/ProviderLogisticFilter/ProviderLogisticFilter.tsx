import { FilterProps, FixedListFilter } from '@dfl/mui-admin-layout';
import { useFindLogistics } from 'modules/inventory/provider/logistics/hooks/useFindLogistics';
import { memo } from 'react';

const ProviderLogisticFilter = ({ filter, ...props }: FilterProps) => {
  const { data } = useFindLogistics();

  

  return (
    <FixedListFilter
      {...props}
      filter={filter}
      options={data?.data?.map((value: any) => ({
        value: value._id,
        label: value.name,
      }))}
    />
  );
};

export default memo(ProviderLogisticFilter);
