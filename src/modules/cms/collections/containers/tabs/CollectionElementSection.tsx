import { memo } from 'react';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};

const CollectionElementSection = ({ contentType }: Props) => {
  return <div>LITA</div>;
};

export default memo(CollectionElementSection);
