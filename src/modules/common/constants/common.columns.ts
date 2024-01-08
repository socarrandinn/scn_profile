import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { AddressValue } from 'modules/common/components/Address';

export const createdATColumn: HeadCell<any> = {
  field: 'createdAt',
  type: CellType.DATE,
  headerName: 'common:createdAt',
};

export const addressColumn: HeadCell<ILogistics> = {
  field: 'address',
  translate: true,
  headerName: 'common:address',
  component: AddressValue
};
