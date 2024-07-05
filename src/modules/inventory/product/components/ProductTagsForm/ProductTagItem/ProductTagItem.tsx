import { IProductTags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { memo } from 'react';
import ProductTagItemString from './ProductTagItemString';
import ProductTagItemArray from './ProductTagItemArray';
import ProductTagItemBoolean from './ProductTagItemBoolean';

type ProductTagItemProps = {
  tag: IProductTags;
};

const ProductTagItem = ({ tag }: ProductTagItemProps) => {
  switch (tag?.type) {
    case TAG_TYPE_ENUM.NUMBER:
    case TAG_TYPE_ENUM.STRING:
      return <ProductTagItemString tag={tag} />;
    case TAG_TYPE_ENUM.ARRAY:
    case TAG_TYPE_ENUM.ARRAY_CHECKBOX:
      return <ProductTagItemArray tag={tag} />;
    case TAG_TYPE_ENUM.BOOLEAN:
      return <ProductTagItemBoolean tag={tag} />;

    default:
      return <ProductTagItemString tag={tag} />;
  }
};

export default memo(ProductTagItem);
