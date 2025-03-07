import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { CausesIncidenceService } from '../services';
import { CAUSES_INCIDENCES_LIST_KEY } from './causes-incidence.queries';
import { transformWhitObjectId } from 'modules/common/constants/object-id';

export const parentCausesIncidenceFilter: Filter = {
  filter: 'causesIncidence:fields.parent',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'parent',
  labelKey: 'name',
  field: 'parent',
  fetchFunc: CausesIncidenceService.search,
  fetchOption: { size: 10 },
  queryKey: CAUSES_INCIDENCES_LIST_KEY,
  transform: (value: any) => transformWhitObjectId(value, 'parent'),
};

export const causesIncidenceFilters = [parentCausesIncidenceFilter, createdATFilter];
