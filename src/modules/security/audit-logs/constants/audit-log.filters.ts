import { FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { createdATFilter } from 'modules/common/constants';
import { getUserFilter } from 'modules/security/common/constants/filters';
import { AUDIT_LOG_EVENT_ENUM } from './audit-log.status';

const userFilter = getUserFilter('user._id');

export const eventFilter = {
  filter: 'auditLog:event.title',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'visible',
  field: 'event',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: 'event', value });
  },
  options: Object.keys(AUDIT_LOG_EVENT_ENUM).map((key) => ({
    value: key,
    translate: true,
    label: `auditLog:event.${key}`,
  })),
};

export const auditLogFilters = [userFilter, eventFilter, createdATFilter];
