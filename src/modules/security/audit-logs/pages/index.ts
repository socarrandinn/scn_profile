import { lazy } from 'react';

const loadAuditLogList = () => import('modules/security/audit-logs/pages/AuditLogList');
export const AuditLogList = lazy(loadAuditLogList);
