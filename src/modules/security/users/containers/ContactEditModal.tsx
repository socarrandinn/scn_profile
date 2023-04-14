import { useCallback, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchParamsChange } from '@dfl/react-security';
import ContactCreateModal from './ContactCreateModal';
import { useFindOneContact } from '../hooks/useFindOneContact';

const ContactEditModal = () => {
  const [searchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneContact(entityId);
  const { removeField } = useSearchParamsChange('edit');

  const handleCloseEdit = useCallback(() => {
    removeField('edit');
  }, [removeField]);

  return (
    <ContactCreateModal
      title='shipping.edit'
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ContactEditModal);
