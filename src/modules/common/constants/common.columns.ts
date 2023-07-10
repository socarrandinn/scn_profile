import { CellType, HeadCell } from '@dfl/mui-admin-layout';

export const createdATColumn: HeadCell<any> = {
  field: 'createdAt',
  type: CellType.DATE,
  headerName: 'common:createdAt',
};
