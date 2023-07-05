import { MessageRowActions } from 'modules/client/message/components/MessageRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IMessage } from 'modules/client/message/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { MESSAGE_PERMISSIONS } from 'modules/client/message/constants/message.permissions';

export const messageNameColumn: HeadCell<IMessage> = {
  field: 'name',
  headerName: 'message:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IMessage) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const messageDescriptionColumn: HeadCell<IMessage> = {
  field: 'description',
  headerName: 'message:fields.description',
};

export const messageEmailColumn: HeadCell<IMessage> = {
  field: 'email',
  headerName: 'message:fields.email',
};

export const messageMessageColumn: HeadCell<IMessage> = {
  field: 'message',
  headerName: 'message:fields.message',
};

export const messageSubjectColumn: HeadCell<IMessage> = {
  field: 'message',
  headerName: 'message:fields.Subject',
};

export const messageActionsColumn: HeadCell<IMessage> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: MESSAGE_PERMISSIONS.MESSAGE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: MessageRowActions,
};

export const messageColumns: Array<HeadCell<any>> = [
  messageNameColumn,
  messageDescriptionColumn,
  createdATColumn,
  messageActionsColumn,
  messageEmailColumn,
  messageMessageColumn,
  messageSubjectColumn
];
