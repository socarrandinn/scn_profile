import { memo } from 'react';
import { SkeletonForm } from '@dfl/mui-react-common';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';

const manufactureListProduct = () => {
  return (<PaperTabView firsts>
    <SkeletonForm numberItemsToShow={6} itemHeight={15}/>
  </PaperTabView>);
}

export default memo(manufactureListProduct);
