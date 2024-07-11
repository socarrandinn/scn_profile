import { IProductTags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { memo } from 'react';
import TagItemString from './TagItemString';
import TagItemArray from './TagItemArray';
import TagItemBoolean from './TagItemBoolean';

type TagItemProps = {
  tag: IProductTags;
};

const TagItem = ({ tag }: TagItemProps) => {
  switch (tag?.type) {
    case TAG_TYPE_ENUM.NUMBER:
    case TAG_TYPE_ENUM.STRING:
      return <TagItemString tag={tag} />;
    case TAG_TYPE_ENUM.ARRAY:
      return <TagItemArray tag={tag} />;
    case TAG_TYPE_ENUM.BOOLEAN:
      return <TagItemBoolean tag={tag} />;

    default:
      return <TagItemString tag={tag} />;
  }
};

export default memo(TagItem);
