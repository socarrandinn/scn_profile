import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFindOneBank } from '../hooks/useFindOneBank';
import BankCreateModal from './BankCreateModal';

const BankEditModal = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneBank(entityId);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <BankCreateModal
      title={'bank.edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(BankEditModal);
