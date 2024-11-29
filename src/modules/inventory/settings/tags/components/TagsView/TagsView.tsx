import { List, ListItem, ListItemText } from '@mui/material';
import { memo } from 'react';
import { ISummaryTags } from '../../interfaces';
import TagItem from '../TagsContentForm/TagItem/TagItem';

type TagsViewProps = {
  tags: any[];
};

const TagsView = ({ tags }: TagsViewProps) => {
  return (
    <List>
      {tags?.map((tag: ISummaryTags, index) => (
        <ListItem key={tag?._id}>
          <ListItemText primary={<TagItem key={tag?._id} tag={tag} />} />
        </ListItem>
      ))}
    </List>
  );
};

export default memo(TagsView);
