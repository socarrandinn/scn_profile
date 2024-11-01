import { memo } from 'react';
import { RelatedProductsListComponent } from '../components/RelatedProductsListComponent';

const RelatedProductsContainer = () => {
  return <RelatedProductsListComponent />;
};

export default memo(RelatedProductsContainer);
