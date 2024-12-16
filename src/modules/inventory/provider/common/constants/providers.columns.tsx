import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IProvider } from 'modules/inventory/provider/common/interfaces';
import { ProviderCell } from 'modules/inventory/provider/common/components';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { PhoneValue } from 'components/libs/PhoneValue';
import { ProviderAvatarCell } from 'modules/inventory/provider/common/components/ProviderAvatarCell';

export const providerImageColumn: HeadCell<IProvider> = {
  field: 'avatar',
  headerName: 'provider:fields.image',
  disablePadding: false,
  sortable: false,
  align: CellAlign.CENTER,
  renderCell: (_, data: IProvider) => (
    <ProviderAvatarCell name={data.name} image={data.avatar} type={data.type} variant='rounded' />
  ),
};

export const providerNameColumn: HeadCell<IProvider> = {
  field: 'name',
  headerName: 'provider:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IProvider) => (
    <ProviderCell provider={data._id as string} name={data.name} image={data.avatar} type={data.type} hideImage />
  ),
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

export const providerPhoneColumn: HeadCell<ILogistics> = {
  field: 'contacts.mainPhone',
  headerName: 'common:phone',
  type: CellType.PHONE,
  component: PhoneValue,
};
