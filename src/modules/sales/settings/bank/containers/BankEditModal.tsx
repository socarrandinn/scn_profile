import { memo, useCallback } from 'react';
import BankCreateModal from 'modules/sales/settings/bank/containers/BankCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneBank } from 'modules/sales/settings/bank/hooks/useFindOneBank';

const BankEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOneBank(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <BankCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(BankEditModal);
