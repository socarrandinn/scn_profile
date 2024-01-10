import { memo } from 'react';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import RoleProviderCreateModal from './RoleProviderCreateModal';

type RoleProviderDetailEditModalProps = {
  onClose: () => void;
  isOpen: boolean;
};
const RoleProviderDetailEditModal = ({ onClose, isOpen }: RoleProviderDetailEditModalProps) => {
  const { data, isLoading } = useRoleProviderDetail();

  return (
    <RoleProviderCreateModal
      title={'edit'}
      open={isOpen}
      onClose={onClose}
      initValue={data}
      loadingInitData={isLoading}
    />
  );
};

export default memo(RoleProviderDetailEditModal);
