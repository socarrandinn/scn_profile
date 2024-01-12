import { memo, useCallback } from 'react';
import ClientsCreateModal from 'modules/crm/clients/containers/ClientsCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneClients } from 'modules/crm/clients/hooks/useFindOneClients';

const ClientsEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneClients(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ClientsCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ClientsEditModal);
