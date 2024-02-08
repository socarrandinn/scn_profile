import { lazy } from 'react';

const loadAuditLogPage = () => import('modules/security/audit-logs/pages/AuditLogPage');
export const AuditLogPage = lazy(loadAuditLogPage);

