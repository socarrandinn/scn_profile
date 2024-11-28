import { ISummaryTags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { memo } from 'react';
import TagItemString from './TagItemString';
import TagItemArray from './TagItemArray';
import TagItemBoolean from './TagItemBoolean';
import { SxProps } from '@mui/material';

type TagItemProps = {
  tag: ISummaryTags;
  sx?: SxProps;
};

const TagItem = ({ tag, sx }: TagItemProps) => {
  switch (tag?.type) {
    case TAG_TYPE_ENUM.NUMBER:
    case TAG_TYPE_ENUM.STRING:
      return <TagItemString tag={tag} sx={sx} />;
    case TAG_TYPE_ENUM.ARRAY:
      return <TagItemArray tag={tag} sx={sx} />;
    case TAG_TYPE_ENUM.BOOLEAN:
      return <TagItemBoolean tag={tag} sx={sx} />;
    default:
      return <TagItemString tag={tag} sx={sx} />;
  }
};

export default memo(TagItem);
