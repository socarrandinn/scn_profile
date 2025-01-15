import { memo, useCallback } from 'react';
import BannerCreateModal from 'modules/cms/banners/containers/BannerCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneBanner } from 'modules/cms/banners/hooks/useFindOneBanner';

const BannerEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOneBanner(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <BannerCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(BannerEditModal);
