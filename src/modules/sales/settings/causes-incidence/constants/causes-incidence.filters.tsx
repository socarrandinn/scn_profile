import { Filter, FilterProps, FilterType, FixedListFilter } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { CAUSES_INCIDENCE_TYPE_ENUM } from '../interfaces';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

const RoleProviderTypeFilter = ({ filter, ...props }: FilterProps) => {
  const { t } = useTranslation('causesIncidence');
  const optionsFilters = useMemo(
    () =>
      Object.keys(CAUSES_INCIDENCE_TYPE_ENUM)?.map((cause) => ({
        value: cause,
        label: t(`cause.${cause}`),
      })),
    [t],
  );

  return <FixedListFilter filter={filter} {...props} options={optionsFilters} />;
};

export const getCausesFilterByField = (field: string): Filter => ({
  filter: 'causesIncidence:cause:title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'type',
  field,
  Component: RoleProviderTypeFilter,
});

const typeFilter = getCausesFilterByField('type');

export const causesIncidenceFilters = [typeFilter, createdATFilter];
