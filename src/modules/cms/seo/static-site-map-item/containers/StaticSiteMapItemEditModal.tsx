import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import StaticSiteMapItemCreateModal from './StaticSiteMapItemCreateModal';
import { useFindOneStaticSiteMapItem } from '../hooks/useFindOneStaticSiteMapItem';

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
      title={'static_site_map_item.edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(StaticSiteMapItemEditModal);
