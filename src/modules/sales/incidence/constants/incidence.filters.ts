import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { getParentCausesIncidenceFilter } from 'modules/sales/settings/causes-incidence/constants/causes-incidence.filters';
import { userAdminFilter } from 'modules/security/users/constants/user-filters';

const causeFilter: Filter = getParentCausesIncidenceFilter('incidence:fields.cause');

const orderCodeFilter: Filter = {
  filter: 'incidence:fields.orderCode',
  translate: true,
  type: FilterType.TEXT,
  key: 'orderCode',
  field: 'orderReference.code',
};

const assignedFilter: Filter = userAdminFilter('responsible', 'incidence:fields.assignedTo');

const createdByFilter: Filter = userAdminFilter('createdBy', 'incidence:fields.createdBy');

export const incidenceFilters = [causeFilter, orderCodeFilter, assignedFilter, createdByFilter, createdATFilter];
