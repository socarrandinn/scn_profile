import { useToggle } from '@dfl/hook-utils';
import { AddButton } from '@dfl/mui-admin-layout';
import { PROVIDER_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { SelectProviderAndType } from 'modules/security/users/components/SelectProviderAndType';
import UserCreateModal from 'modules/security/users/containers/UserCreateModal';
import { userProviderSchema } from 'modules/security/users/schemas/user.schema';

const AddUser = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  return (
    <>
      <AddButton action={onOpen} />
      <UserCreateModal
        open={isOpen}
        onClose={onClose}
        validationScheme={userProviderSchema}
        queryKey={PROVIDER_LIST_KEY}
        redirect={'/security/providers-users/all'}
      >
        <SelectProviderAndType />
      </UserCreateModal>
    </>
  );
};

export default AddUser;
