import { Filter } from '@dfl/mui-admin-layout';
import { createdATFilter, getBoleanFilter } from 'modules/common/constants';

export const requiredResponsibleFilter: Filter = getBoleanFilter(
  'requiresResponsible',
  'stockReductionCause:fields.requiresResponsible',
);

export const requiresEvidenceFilter: Filter = getBoleanFilter(
  'requiresEvidence',
  'stockReductionCause:fields.requiresEvidence',
);

export const stockReductionCauseFilters = [requiredResponsibleFilter, requiresEvidenceFilter, createdATFilter];
