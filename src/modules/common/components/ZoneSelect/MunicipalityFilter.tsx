import { findMunicipalitiesByStates, MUNICIPALITIES_ALL } from '@dfl/location';
import { FilterProps, FixedListFilter } from '@dfl/mui-admin-layout';
import { useGetQueryObj } from '@dfl/react-security';
import { memo, useMemo } from 'react';

const MunicipalityFilter = ({ filter, value, onChange, title }: FilterProps & { options?: any[] }) => {
  const query = useGetQueryObj();

  const filteredOptions = useMemo(() => {
    const provinceValue = (query.pv || '').slice(-2);
    return (provinceValue ? findMunicipalitiesByStates(provinceValue) : MUNICIPALITIES_ALL)?.map((pv) => ({
      value: pv.code,
      label: pv.name,
    }));
  }, [query]);

  return (
    <FixedListFilter
      options={filteredOptions}
      value={(value as string[] | undefined) || []}
      title={title}
      onChange={onChange}
      filter={filter}
    />
  );
};

export default memo(MunicipalityFilter);
