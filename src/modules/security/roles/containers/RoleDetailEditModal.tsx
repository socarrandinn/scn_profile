import { memo } from 'react';
import RoleCreateModal from 'modules/security/roles/containers/RoleCreateModal';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

type RoleDetailEditModalProps = {
  onClose: () => void;
  isOpen: boolean;
  type: SPACE_TYPE;
};

const RoleDetailEditModal = ({ onClose, isOpen, type }: RoleDetailEditModalProps) => {
  const { data, isLoading } = useRoleDetail();

  return (
    <RoleCreateModal
      title={'edit'}
      open={isOpen}
      onClose={onClose}
      initValue={data}
      loadingInitData={isLoading}
      type={type}
    />
  );
};

export default memo(RoleDetailEditModal);
