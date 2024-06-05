import { DisallowedWordRowActions } from 'modules/crm/disallowed-word/components/DisallowedWordRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IDisallowedWord } from 'modules/crm/disallowed-word/interfaces';
import { DISALLOWED_WORD_PERMISSIONS } from 'modules/crm/disallowed-word/constants/disallowed-word.permissions';

export const disallowedWordValueColumn: HeadCell<IDisallowedWord> = {
  field: 'word',
  headerName: 'disallowedWord:fields.word',
  disablePadding: false,
  renderCell: (word: string, data?: IDisallowedWord) => (<EditLink entityId={data?._id as string}>{word}</EditLink>),
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
  disallowedWordValueColumn,
  disallowedWordActionsColumn
];
