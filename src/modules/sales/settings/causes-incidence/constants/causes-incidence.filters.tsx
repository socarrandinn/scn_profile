import { Filter, FilterType, FilterValue } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { CausesIncidenceService } from '../services';
import { CAUSES_INCIDENCES_LIST_KEY } from './causes-incidence.queries';
import { transformWhitObjectId } from 'modules/common/constants/object-id';
import { EmptyFilter, ExistFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { INCIDENCE_AUDIENCE_TARGET } from '../interfaces';

enum ACTIVE_STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export const getActiveFilter = (value: ACTIVE_STATUS, field: string) => {
  switch (value) {
    case ACTIVE_STATUS.ACTIVE: {
      return new TermFilter({
        field,
        value: true,
      });
    }
    case ACTIVE_STATUS.INACTIVE: {
      return new TermFilter({
        field,
        value: false,
      });
    }
  }
};
export const getAudienceFilter = (value: ACTIVE_STATUS, field: string) => {
  switch (value) {
    case ACTIVE_STATUS.ACTIVE: {
      return new ExistFilter({
        field,
        value: true,
      });
    }
    case ACTIVE_STATUS.INACTIVE: {
      return new ExistFilter({
        field,
        value: false,
      });
    }
  }
};

export const getParentCausesIncidenceFilter = (name?: string) => ({
  filter: name || 'causesIncidence:fields.parent',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'parent',
  labelKey: 'name',
  field: 'parent',
  fetchFunc: CausesIncidenceService.search,
  fetchOption: { size: 10 },
  queryKey: CAUSES_INCIDENCES_LIST_KEY,
  transform: (value: any) => transformWhitObjectId(value, 'parent'),
});

export const parentCausesIncidenceFilter: Filter = getParentCausesIncidenceFilter();

export const audienceCausesIncidenceFilter: Filter = {
  filter: 'causesIncidence:notification.audience',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'audience',
  field: 'notification.audience.target',
  options: Object.values(INCIDENCE_AUDIENCE_TARGET)?.map((target) => ({
    value: target,
    translate: true,
    label: `causesIncidence:fields.target.${target}`,
  })),
};

export const notificationIncidenceFilter: Filter = {
  filter: 'causesIncidence:notification.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'sendNotification',
  field: 'sendNotification',
  transform: (value: FilterValue) => {
    const opt = Array.isArray(value) ? value : [value];
    if (opt) {
      return new OperatorFilter({
        type: 'OR',
        filters: opt?.map((value) => getActiveFilter(value as ACTIVE_STATUS, 'sendNotification')),
      });
    }
    return new EmptyFilter();
  },
  options: [
    {
      value: ACTIVE_STATUS.ACTIVE,
      translate: true,
      label: 'causesIncidence:notification.active',
    },
    {
      value: ACTIVE_STATUS.INACTIVE,
      translate: true,
      label: 'causesIncidence:notification.inactive',
    },
  ],
};

export const causesIncidenceFilters = [
  parentCausesIncidenceFilter,
  // isPublicCausesIncidenceFilter,
  notificationIncidenceFilter,
  audienceCausesIncidenceFilter,
  createdATFilter,
];
