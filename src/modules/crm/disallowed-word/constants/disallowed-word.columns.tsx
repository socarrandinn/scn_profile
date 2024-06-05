import { DisallowedWordRowActions } from 'modules/crm/disallowed-word/components/DisallowedWordRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IDisallowedWord } from 'modules/crm/disallowed-word/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { DISALLOWED_WORD_PERMISSIONS } from 'modules/crm/disallowed-word/constants/disallowed-word.permissions';

export const disallowedWordNameColumn: HeadCell<IDisallowedWord> = {
  field: 'name',
  headerName: 'disallowedWord:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IDisallowedWord) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const disallowedWordDescriptionColumn: HeadCell<IDisallowedWord> = {
  field: 'description',
  headerName: 'disallowedWord:fields.description',
};

export const disallowedWordActionsColumn: HeadCell<IDisallowedWord> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: DISALLOWED_WORD_PERMISSIONS.DISALLOWED_WORD_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: DisallowedWordRowActions,
};

export const disallowedWordColumns: Array<HeadCell<any>> = [
  disallowedWordNameColumn,
  disallowedWordDescriptionColumn,
  createdATColumn,
  disallowedWordActionsColumn
];
