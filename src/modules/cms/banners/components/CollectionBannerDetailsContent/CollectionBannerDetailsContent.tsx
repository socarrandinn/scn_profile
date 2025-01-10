import { memo } from 'react';
import { ConditionContainer, PageLoader } from '@dfl/mui-react-common';
import { useCollectionDetails } from '../../../collections/context/CollectionContext';
import BannerContent from '../BannerDetails/BannerContent/BannerContent';

const CollectionBannerDetailsContent = () => {
  const { isLoading } = useCollectionDetails();

  return (
    <ConditionContainer active={!isLoading} alternative={<PageLoader />}>
      <BannerContent />
    </ConditionContainer>
  );
};

export default memo(CollectionBannerDetailsContent);
