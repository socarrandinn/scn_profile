import { CenterPageLayout } from 'layouts/index';
import { memo } from 'react';
import ManufactureDetailsContainer from 'modules/inventory/provider/manufacture/containers/ManufactureDetailsContainer';

const ManufactureDetail = () => {
  return (
      <CenterPageLayout>
        <ManufactureDetailsContainer/>
      </CenterPageLayout>
  );
};

export default memo(ManufactureDetail);
