import { HeadCell } from '@dfl/mui-admin-layout';
import { renderTagList } from '@dfl/mui-react-common';
export const userFirstNameColumn: HeadCell = {
  field: 'firstName',
  headerName: 'demos:tables.table.data.user.firstName',
};

export const userLastNameColumn: HeadCell = {
  field: 'lastName',
  headerName: 'demos:tables.table.data.user.lastName',
};

export const skillsColumn: HeadCell = {
  field: 'skills',
  headerName: 'demos:tables.table.data.user.skills',
  disablePadding: true,
  renderCell: (skills: string[]) => renderTagList(skills, 3),
};

export const dateColumn: HeadCell = {
  field: 'createdAt',
  headerName: 'demos:tables.table.data.user.createdAt',
};

export const columns: HeadCell[] = [userFirstNameColumn, userLastNameColumn, skillsColumn, dateColumn];
