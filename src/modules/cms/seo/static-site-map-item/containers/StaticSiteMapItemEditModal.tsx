import { memo, useCallback } from 'react';
import StaticSiteMapItemCreateModal from 'modules/cms/seo/static-site-map-item/containers/StaticSiteMapItemCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneStaticSiteMapItem } from 'modules/cms/seo/static-site-map-item/hooks/useFindOneStaticSiteMapItem';

const StaticSiteMapItemEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneStaticSiteMapItem(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <StaticSiteMapItemCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(StaticSiteMapItemEditModal);
