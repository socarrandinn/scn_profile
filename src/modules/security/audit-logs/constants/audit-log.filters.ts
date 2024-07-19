import { FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { createdATFilter } from 'modules/common/constants';
import { getUserFilter } from 'modules/security/common/constants/filters';
import { AUDIT_LOG_EVENT_ENUM, AUDIT_LOG_MODULE_ENUM } from './audit-log.status';

const userFilter = getUserFilter('user._id');

export const eventFilter = {
  filter: 'auditLog:event.title',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'event',
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

export const moduleFilter = {
  filter: 'auditLog:module.title',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'module',
  field: 'module',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: 'module', value });
  },
  options: Object.keys(AUDIT_LOG_MODULE_ENUM).map((key) => ({
    value: key,
    translate: true,
    label: `auditLog:module.${key}`,
  })),
};

export const ipFilter = {
  filter: 'auditLog:device.ip',
  type: FilterType.TEXT,
  translate: true,
  key: 'ip',
  field: 'device.ip',
};

export const auditLogAllFilters = [ipFilter, userFilter, eventFilter, moduleFilter, createdATFilter];

export const auditLogFilters = [userFilter, eventFilter, moduleFilter, createdATFilter];

export const auditLogRobotTxtFilters = [userFilter, createdATFilter];
