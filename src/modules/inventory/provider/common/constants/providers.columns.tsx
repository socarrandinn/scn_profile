import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IProvider } from 'modules/inventory/provider/common/interfaces';
import { ProviderCell, ProviderStatePicker } from 'modules/inventory/provider/common/components';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { IAddressWithLocation } from 'modules/common/interfaces';
import { AddressValue } from 'modules/common/components/Address';

export const providerNameColumn: HeadCell<IProvider> = {
  field: 'name',
  headerName: 'provider:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IProvider) => (
        <ProviderCell provider={data._id as string} name={data.name} image={data.avatar}/>),
};

export const providerStateColumn: HeadCell<IProvider> = {
  field: 'active',
  headerName: 'provider:fields.state',
  align: CellAlign.CENTER,
  component: ProviderStatePicker,
};

export const providerCodeColumn: HeadCell<ILogistics> = {
  field: 'code',
  headerName: 'provider:fields.code',
};

export const providerEmailColumn: HeadCell<ILogistics> = {
  field: 'contacts.mainEmail',
  headerName: 'common:email',
  type: CellType.EMAIL,
};

export const providerAddressColumn: HeadCell<ILogistics> = {
  field: 'address',
  translate: true,
  headerName: 'common:address',
  renderCell: (value: IAddressWithLocation) => <AddressValue value={value}/>
};
