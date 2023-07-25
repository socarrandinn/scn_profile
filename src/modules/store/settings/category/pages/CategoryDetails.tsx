import React, { memo } from 'react';
import { CenterPageLayout } from 'layouts/index';
import CategoryDetailContainer from '../containers/CategoryDetailContainer';

const CategoryDetails = () => {
  return (
    <CenterPageLayout>
      <CategoryDetailContainer />
    </CenterPageLayout>
  );
};

export default memo(CategoryDetails);
