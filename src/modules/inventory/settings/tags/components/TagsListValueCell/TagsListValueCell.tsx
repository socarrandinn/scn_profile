import { memo } from 'react';
import { TagList } from '@dfl/mui-react-common';
type TagsListValueCellProps = {
  tags: string[];
};

const TagsListValueCell = ({ tags }: TagsListValueCellProps) => {
  return <TagList value={tags} limit={5} />;
};

export default memo(TagsListValueCell);
