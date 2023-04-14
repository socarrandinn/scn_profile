import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ContactRowActions } from 'modules/security/users/components/ContactRowActions';
import { AddressValue } from 'modules/security/users/components/Address';
import { ContactVerification } from 'modules/security/users/components/ContactVerification';
import { IAddress } from '../interfaces/IAddress';

export const contactColumns: HeadCell[] = [
  {
    field: 'fullName',
    headerName: 'users:shipping.name',
    renderCell: (name: string, contact: any) => <EditLink entityId={contact._id}>{name}</EditLink>,
  },
  {
    field: 'address',
    headerName: 'users:shipping.address',
    renderCell: (address: IAddress) => (
      <AddressValue lineClamp={2} maxCharacters={60} value={address} showCountry showStreet />
    ),
  },
  {
    field: 'verification.isValid',
    headerName: 'users:shipping.verification.title',
    disablePadding: true,
    renderCell: (isValid: boolean) => <ContactVerification value={isValid} />,
  },
  {
    field: 'actions',
    sortable: false,
    width: 100,
    disablePadding: true,
    headerName: 'actions',
    component: ContactRowActions,
  },
];
