import { memo } from 'react';
// import UserDetailContainer from 'modules/security/users/containers/UserDetailContainer';
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
