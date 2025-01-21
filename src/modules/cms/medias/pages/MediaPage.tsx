import { PageLoader } from '@dfl/mui-react-common';
import { PageTabPaperLayout } from 'layouts/index';
import { memo, Suspense, useMemo } from 'react';
import mediaRoutes from '../routes/media-tabs.router';
import { RouteLoader } from '@dfl/react-security';
import { mediasTabs } from '../constants/tabs.details';
import BannerToggle from 'modules/cms/banners/components/BannerToggle/BannerToggle';
import { useBannerContext } from 'modules/cms/banners/context/useBannerContext';
import { useLocation } from 'react-router';

const MediaPage = () => {
  const { setView, view } = useBannerContext();

  const { pathname } = useLocation();
  const isUpload = useMemo(() => pathname === '/cms/medias/upload', [pathname]);

  const onChange = (e: any) => {
    if (e.target.value !== null) {
      const value = e.target.value;
      setView(value);
    }
  };

  return (
    <PageTabPaperLayout
      prefix={'/cms/medias'}
      tabs={mediasTabs}
      actions={<BannerToggle view={view} onChange={onChange} disabled={!isUpload} />}
    >
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader routes={mediaRoutes} notfoundRedirect={'/cms/medias/store'} />
      </Suspense>
    </PageTabPaperLayout>
  );
};

export default memo(MediaPage);
