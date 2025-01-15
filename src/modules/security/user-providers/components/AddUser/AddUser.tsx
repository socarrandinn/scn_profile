import { useToggle } from '@dfl/hook-utils';
import { AddButton } from '@dfl/mui-admin-layout';
import { SelectProviderAndType } from 'modules/security/users/components/SelectProviderAndType';
import UserCreateModal from 'modules/security/users/containers/UserCreateModal';
import { userProviderSchema } from 'modules/security/users/schemas/user.schema';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';

const AddUser = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  return (
    <>
      <AddButton action={onOpen} />
      <UserCreateModal
        open={isOpen}
        onClose={onClose}
        validationScheme={userProviderSchema}
        queryKey={USERS_LIST_KEY}
        rolesType={ROLE_TYPE_ENUM.PROVIDER}
      >
        <SelectProviderAndType />
      </UserCreateModal>
    </>
  );
};

export default AddUser;
