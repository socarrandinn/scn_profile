import { memo } from 'react';
import RoleCreateModal from 'modules/security/roles/containers/RoleCreateModal';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';

type RoleProviderDetailEditModalProps = {
  onClose: () => void;
  isOpen: boolean;
};
const RoleProviderDetailEditModal = ({ onClose, isOpen }: RoleProviderDetailEditModalProps) => {
  const { data, isLoading } = useRoleProviderDetail();

  return (
    <RoleCreateModal title={'edit'} open={isOpen} onClose={onClose} initValue={data} loadingInitData={isLoading} />
  );
};

export default memo(RoleProviderDetailEditModal);
