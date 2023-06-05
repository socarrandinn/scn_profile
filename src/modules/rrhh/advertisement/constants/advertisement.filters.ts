import { createdATFilter } from 'modules/common/constants/common.filters';
import { FilterType } from '@dfl/mui-admin-layout';
import { ADVERTISEMENTS_TYPES_VALUES } from 'modules/rrhh/advertisement/constants/advertisement-types.constant';
import { ADVERTISEMENTS_AUDIENCE_VALUES } from 'modules/rrhh/advertisement/constants/advertisement-audience.constant';
import { TeamService } from 'modules/rrhh/team/services';
import { TEAMS_LIST_KEY } from 'modules/rrhh/team/constants';
import { EMPLOYEE_LIST_KEY } from 'modules/rrhh/employee/management/constants/queries';
import { EmployeeService } from 'modules/rrhh/employee/management/services';

const advertisingTypeFilter = {
  filter: 'advertisement:fields.type',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'type',
  field: 'type',
  options: ADVERTISEMENTS_TYPES_VALUES?.map((item: string) => ({
    value: item,
    translate: true,
    label: `advertisement:types.${item}`,
  })),
};

const advertisingAudienceFilter = {
  filter: 'advertisement:fields.audience',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'audience',
  field: 'audience',
  options: ADVERTISEMENTS_AUDIENCE_VALUES?.map((item: string) => ({
    value: item,
    translate: true,
    label: `advertisement:audiences.${item}`,
  })),
};

const advertisingEmployeesFilter = {
  filter: 'advertisement:fields.employees',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  fetchFunc: EmployeeService.search,
  fetchOption: { size: 5 },
  queryKey: EMPLOYEE_LIST_KEY,
  key: 'employees',
  labelKey: '_id',
  field: 'employees',
};

const advertisingTeamsFilter = {
  filter: 'advertisement:fields.teams',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  fetchFunc: TeamService.search,
  fetchOption: { size: 5 },
  queryKey: TEAMS_LIST_KEY,
  key: 'teams',
  labelKey: 'name',
  field: 'teams',
};

export const advertisementFilters = [
  advertisingTypeFilter,
  advertisingAudienceFilter,
  advertisingEmployeesFilter,
  advertisingTeamsFilter,
  createdATFilter,
];
