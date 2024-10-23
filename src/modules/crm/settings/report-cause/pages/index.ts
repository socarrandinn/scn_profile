import { lazy } from 'react';

const loadReportCauseList = () => import('modules/crm/settings/report-cause/pages/ReportCauseList');
export const ReportCauseList = lazy(loadReportCauseList);
