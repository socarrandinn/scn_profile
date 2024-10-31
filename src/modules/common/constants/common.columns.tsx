import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { AddressCell } from 'components/AddressCell';

export const createdATColumn: HeadCell<any> = {
  field: 'createdAt',
  type: CellType.DATE,
  headerName: 'common:createdAt',
};

export const addressColumn: HeadCell<any> = {
  field: 'address',
  translate: true,
  headerName: 'common:address',
  renderCell: (name: string, data: any) => <AddressCell address={data.address} />,
};
