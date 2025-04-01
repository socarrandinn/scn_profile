import { useToggle } from '@dfl/hook-utils';
import { AddButton } from '@dfl/mui-admin-layout';
import { SelectProviderAndType } from 'modules/security/users/components/SelectProviderAndType';
import UserCreateModal from 'modules/security/users/containers/UserCreateModal';
import { userProviderSchema } from 'modules/security/users/schemas/user.schema';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { useParams } from 'react-router';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

export type ProviderProps = { provider?: string; providerType?: PROVIDER_TYPE_ENUM };

const AddUser = ({ provider, providerType }: ProviderProps) => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { id } = useParams();

  return (
    <>
      <AddButton action={onOpen} />
      <UserCreateModal
        provider={id}
        open={isOpen}
        onClose={onClose}
        validationScheme={userProviderSchema}
        queryKey={USERS_LIST_KEY}
        rolesType={ROLE_TYPE_ENUM.PROVIDER}
        redirect={'/security/providers-users'}
        apiPath={'/providers/invite'}
        providerType={providerType}
      >
        <SelectProviderAndType provider={provider} />
      </UserCreateModal>
    </>
  );
};

export default AddUser;
