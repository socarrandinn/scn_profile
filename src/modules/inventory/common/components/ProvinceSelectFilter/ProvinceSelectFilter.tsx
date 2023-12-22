import { memo } from 'react';
import { FilterProps, FixedListFilter } from '@dfl/mui-admin-layout';
import { ALLOWED_PROVINCES } from 'settings/globals';

const ProvinceSelectFilter = ({ filter, ...props }: FilterProps) => {
  const options = ALLOWED_PROVINCES.map((pv) => ({ value: pv.state, label: pv.name }));

  return <FixedListFilter filter={filter} {...props} options={options} />;
};

export default memo(ProvinceSelectFilter);
