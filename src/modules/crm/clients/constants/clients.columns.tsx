import { ClientsRowActions } from 'modules/crm/clients/components/ClientsRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IClients } from 'modules/crm/clients/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CLIENTS_PERMISSIONS } from 'modules/crm/clients/constants/clients.permissions';

export const clientsNameColumn: HeadCell<IClients> = {
  field: 'name',
  headerName: 'clients:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IClients) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const clientsDescriptionColumn: HeadCell<IClients> = {
  field: 'description',
  headerName: 'clients:fields.description',
};

export const clientsActionsColumn: HeadCell<IClients> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: CLIENTS_PERMISSIONS.CLIENTS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ClientsRowActions,
};

export const clientsColumns: Array<HeadCell<any>> = [
  clientsNameColumn,
  clientsDescriptionColumn,
  createdATColumn,
  clientsActionsColumn
];
