import { memo, useMemo } from 'react';
import { ICollection } from '../../interfaces';
import { ReactLink } from '@dfl/react-security';
import { COLLECTION_CONTENT_TYPE, COLLECTION_ROUTER } from '../../constants/collection-types';
type CollectionNameCellProps = {
  value: string;
  record: ICollection;
  rowId: string;
};

const CollectionNameCell = ({ record, value, rowId }: CollectionNameCellProps) => {
  const path = useMemo(() => COLLECTION_ROUTER[record?.contentType as COLLECTION_CONTENT_TYPE] ?? '', [record]);

  return <ReactLink to={`/cms/collections/${path}/${rowId}`}>{value}</ReactLink>;
};

export default memo(CollectionNameCell);
