import { memo, useCallback } from 'react';
import CausesIncidenceCreateModal from 'modules/sales/settings/causes-incidence/containers/CausesIncidenceCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneCausesIncidence } from 'modules/sales/settings/causes-incidence/hooks/useFindOneCausesIncidence';

const CausesIncidenceEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneCausesIncidence(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  const notification = {
    enabled: false,
    audience: [
      {
        target: [],
        template: '',
      },
    ],
  };

  return (
    <CausesIncidenceCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      // @ts-ignore
      initValue={{ ...data, notification: data?.notification || notification }}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(CausesIncidenceEditModal);
