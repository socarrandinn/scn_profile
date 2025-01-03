import { memo } from 'react';
import { IProductFeature, PRODUCT_FEATURE_TYPE_ENUM } from '../../interfaces/IProductFeature';
import { TagList } from '@dfl/mui-react-common';
import ColorChip from '../ColorChip/ColorChip';
type ProductFeatureTagListProps = {
  value: string | string[];
  record: IProductFeature;
};

const ProductFeatureTagList = ({ record, value }: ProductFeatureTagListProps) => {
  console.log(value);
  if (record.type === PRODUCT_FEATURE_TYPE_ENUM.COLOR) {
    return <TagList value={value} limit={3} renderTag={(item) => <ColorChip value={item} />} />;
  }
  return <TagList value={value} limit={3} />;
};

export default memo(ProductFeatureTagList);
