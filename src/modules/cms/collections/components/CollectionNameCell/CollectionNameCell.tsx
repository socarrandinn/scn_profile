import { memo } from 'react';
import { ICollection } from '../../interfaces';
import { ReactLink } from '@dfl/react-security';
type CollectionNameCellProps = {
  value: string;
  record: ICollection;
  rowId: string;
};

const CollectionNameCell = ({ record, value, rowId }: CollectionNameCellProps) => {
  return <ReactLink to={`/cms/collections/${rowId}/${record?.contentType}`}>{value}</ReactLink>;
};

export default memo(CollectionNameCell);
