import { memo } from 'react';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { AddPermissionToRoleModal } from 'modules/security/roles/components/AddPermissionToRoleModal';

type AddPermissionToRoleModalWithFetchProps = {
  open: boolean;
  onClose: () => void;
};

const AddPermissionToRoleModalWithFetch = ({ open, onClose }: AddPermissionToRoleModalWithFetchProps) => {
  const { data: role } = useRoleDetail();

  return <AddPermissionToRoleModal role={role} open={open} onClose={onClose} />;
};

export default memo(AddPermissionToRoleModalWithFetch);
