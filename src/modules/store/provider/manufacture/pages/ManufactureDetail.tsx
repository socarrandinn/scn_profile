import { CenterPageLayout } from 'layouts/index';
import { memo } from 'react';
import ManufactureDetailsContainer from 'modules/store/provider/manufacture/containers/ManufactureDetailsContainer';

const ManufactureDetail = () => {
  return (
      <CenterPageLayout>
        <ManufactureDetailsContainer/>
      </CenterPageLayout>
  );
};

export default memo(ManufactureDetail);
