import { useToggle } from '@dfl/hook-utils';
import { AddButton } from '@dfl/mui-admin-layout';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import UserCreateModal from 'modules/security/users/containers/UserCreateModal';
import { userSchema } from 'modules/security/users/schemas/user.schema';

const AddUser = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  return (
    <>
      <AddButton action={onOpen} />
      <UserCreateModal
        open={isOpen}
        onClose={onClose}
        validationScheme={userSchema}
        queryKey={USERS_LIST_KEY}
        redirect={'/security/system-users/all'}
      />
    </>
  );
};

export default AddUser;
