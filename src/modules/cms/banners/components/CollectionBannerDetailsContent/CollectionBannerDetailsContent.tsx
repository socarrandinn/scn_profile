import { memo } from 'react';
import { ConditionContainer, PageLoader } from '@dfl/mui-react-common';
import { useCollectionDetails } from '../../../collections/context/CollectionContext';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import CollectionBannerContentContainer from '../../containers/CollectionBannerContentContainer';
import { CollectionBannerForm } from 'modules/cms/collections/components/CollectionBannerForm';
import BannerEditModal from '../../containers/BannerEditModal';
import { CollectionsBannerSelectElementAction } from 'modules/cms/collections/containers/CollectionsBannerSelectElementModal';

const CollectionBannerDetailsContent = () => {
  const { isLoading } = useCollectionDetails();

  return (
    <>
      <ConditionContainer active={!isLoading} alternative={<PageLoader />}>
        <DetailLayout>
          <DetailContent ghost sx={{ order: { xs: 2, md: 1 } }}>
            <CollectionBannerContentContainer />
          </DetailContent>
          <DetailSummary ghost width={{ md: 350, lg: 420, xl: 450 }} sx={{ order: { xs: 1, md: 2 } }}>
            <CollectionBannerForm />
          </DetailSummary>
        </DetailLayout>
        {/* edit banner */}
        <BannerEditModal query='bannerEdit' />
      </ConditionContainer>

      {/* add banners elements selected */}
      <CollectionsBannerSelectElementAction />
    </>
  );
};

export default memo(CollectionBannerDetailsContent);
