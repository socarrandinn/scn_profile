import { memo } from 'react';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { SkeletonForm } from '@dfl/mui-react-common';

const ManufactureListUser = () => {
  return (
      <PaperTabView firsts>
          <SkeletonForm numberItemsToShow={4} itemHeight={15}/>
      </PaperTabView>
  );
};
export default memo(ManufactureListUser);
