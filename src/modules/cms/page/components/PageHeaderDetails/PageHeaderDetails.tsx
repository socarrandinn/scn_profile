import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/common/components/HeaderSummaryTabs';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { usePageDetails } from '../../context/PageDetailsContext';
import { pageTabs } from '../../constants/page.tabs';
import { PAGE_STYLE } from 'modules/cms/collections/constants/cms-entities.style';
import PageHeaderActions from './PageHeaderActions';
import PageEditModal from '../../containers/PageEditModal';

const PageHeaderDetails = () => {
  const { isLoading, error, page } = usePageDetails();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton hideImage />;

  return (
    <>
      <HeaderSummaryTabs
        title={page?.seo?.name as string}
        subtitle={page?.seo?.description}
        hideImage
        entityStyle={PAGE_STYLE}
        actions={<PageHeaderActions />}
      >
        <RouterTab
          tabs={pageTabs}
          prefix={`/cms/pages/${page?._id as string}`}
          translationNs={'page'}
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
        />
      </HeaderSummaryTabs>
      <PageEditModal />
    </>
  );
};

export default memo(PageHeaderDetails);
