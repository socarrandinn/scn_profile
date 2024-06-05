import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { CauseReportTypeCell } from '../components/CauseReportTypeCell';
import { createdATColumn } from 'modules/common/constants';

export const reportCauseName: HeadCell = {
  field: 'type',
  headerName: 'reportCause:fields:cause',
  component: CauseReportTypeCell,
};

export const countAmountName: HeadCell = {
  field: 'report',
  headerName: 'reportCause:fields:count',
  renderCell: (report: { count: number }) => report?.count ?? 0,
  align: CellAlign.CENTER,
};

export const reportsReviewColumns: HeadCell[] = [reportCauseName, countAmountName, createdATColumn];
