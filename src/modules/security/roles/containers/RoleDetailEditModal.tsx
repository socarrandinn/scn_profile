import { memo } from 'react';
import RoleCreateModal from 'modules/security/roles/containers/RoleCreateModal';
import { useRoleDetail } from 'modules/security/roles/contexts';

type RoleDetailEditModalProps = {
  onClose: () => void;
  isOpen: boolean;
};
const RoleDetailEditModal = ({ onClose, isOpen }: RoleDetailEditModalProps) => {
  const { data, isLoading } = useRoleDetail();

  return (
    <RoleCreateModal title={'edit'} open={isOpen} onClose={onClose} initValue={data} loadingInitData={isLoading} />
  );
};

export default memo(RoleDetailEditModal);
