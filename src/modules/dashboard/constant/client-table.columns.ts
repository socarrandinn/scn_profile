import { HeadCell } from '@dfl/mui-admin-layout';

export const firstName: HeadCell = {
  field: 'firstName',
  translate: true,
  headerName: 'report:report.client.table.firstName',
};

export const email: HeadCell = {
  field: 'email',
  translate: true,
  headerName: 'report:report.client.table.email',
  disablePadding: true,
};
export const createdAt: HeadCell = {
  field: 'createdAt',
  translate: true,
  headerName: 'report:report.client.table.createdAt',
  disablePadding: true,
};

export const clientTableColumns: HeadCell[] = [firstName, createdAt, email];
