import { AUDIT_LOG_EVENT_ENUM, AUDIT_LOG_MODULE_ENUM } from '../constants/audit-log.status';

export interface IAuditLog {
  _id?: string
}

export interface IAuditLogEntity {
  _id: string
  user: {
    _id: string
    firstName: string
    lastName: string
    email: string
  };
  module: AUDIT_LOG_MODULE_ENUM
  event: AUDIT_LOG_EVENT_ENUM
  entity: string
  path: string,
  payload: any // change
  updatedAt: Date
}
