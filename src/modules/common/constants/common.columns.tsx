import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { FormattedAddressCell } from 'components/AddressCell';

export const createdATColumn: HeadCell<any> = {
  field: 'createdAt',
  type: CellType.DATE,
  headerName: 'common:createdAt',
};

export const addressColumn: HeadCell<any> = {
  field: 'address',
  translate: true,
  headerName: 'common:address',
  width: 350,
  renderCell: (name: string, data: any) => <FormattedAddressCell address={data.address} />, // <AddressCell address={data.address} />,
};

export const emailColumn: HeadCell = {
  field: 'email',
  type: CellType.EMAIL,
  headerName: 'common:email',
};

export const phoneColumn: HeadCell = {
  field: 'phone',
  type: CellType.PHONE,
  headerName: 'common:phone',
};
