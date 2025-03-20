import { ReportCauseRowActions } from 'modules/crm/settings/report-cause/components/ReportCauseRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IReportCause } from 'modules/crm/settings/report-cause/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { REPORT_CAUSE_PERMISSIONS } from 'modules/crm/settings/report-cause/constants/report-cause.permissions';

export const reportCauseNameColumn: HeadCell<IReportCause> = {
  field: 'name',
  headerName: 'reportCause:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IReportCause) => <EditLink entityId={data._id as string}>{name}</EditLink>,
};

export const reportCauseDescriptionColumn: HeadCell<IReportCause> = {
  field: 'description',
  headerName: 'reportCause:fields.description',
};

export const reportCauseActionsColumn: HeadCell<IReportCause> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: REPORT_CAUSE_PERMISSIONS.REPORT_CAUSE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ReportCauseRowActions,
};

export const reportCauseColumns: Array<HeadCell<any>> = [
  reportCauseNameColumn,
  reportCauseDescriptionColumn,
  createdATColumn,
  reportCauseActionsColumn,
];
