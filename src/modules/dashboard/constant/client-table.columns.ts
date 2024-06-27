import { CellType, HeadCell } from '@dfl/mui-admin-layout';

export const fullName: HeadCell = {
  field: 'fullName',
  translate: true,
  headerName: 'report:report.client.table.fullName',
};

export const email: HeadCell = {
  field: 'email',
  translate: true,
  type: CellType.EMAIL,
  headerName: 'report:report.client.table.email',
  disablePadding: true,
};
export const createdAt: HeadCell = {
  field: 'createdAt',
  translate: true,
  type: CellType.DATE,
  headerName: 'report:report.client.table.createdAt',
  disablePadding: true,
};

export const clientTableColumns: HeadCell[] = [fullName, email, createdAt];
