import { memo, useCallback } from 'react';
import BannerCreateModal from 'modules/cms/banners/containers/BannerCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneBanner } from 'modules/cms/banners/hooks/useFindOneBanner';

type Props = {
  query?: string;
};
const BannerEditModal = ({ query = 'edit' }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = searchParams.get(query);

  const { isLoading, data, error } = useFindOneBanner(entityId);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete(query);
    setSearchParams(searchParams);
  }, [entityId, searchParams, query, setSearchParams]);

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
