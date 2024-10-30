import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { SupplierUserInviteForm } from '../components/SupplierUserInviteForm';
import { useProviderProductsDetail } from '../context/ProviderProductDetail';
import UserInviteCreateModal from 'modules/security/users-invite/containers/UserInviteCreateModal';
import { ICreateUserInvite, USER_INVITE_TYPE_ENUM } from 'modules/security/users-invite/interfaces';
import { initUserInviteValue } from 'modules/security/users-invite/hooks/useUsersInviteCreateForm';
import { providerInvitationSchema } from 'modules/security/users-invite/schemas/users-invite.schema';

type SupplierAddUserInviteEditModalProps = {
  open: boolean;
  onClose: () => void;
};

const SupplierAddUserInviteEditModal = ({ onClose, open }: SupplierAddUserInviteEditModalProps) => {
  const { providerProductsId, providerProducts, isLoading, error } = useProviderProductsDetail();
  const { t } = useTranslation('supplier');

  const dataInit: ICreateUserInvite = {
    ...initUserInviteValue,
    provider: providerProductsId as string,
    inviteType: USER_INVITE_TYPE_ENUM.PROVIDER,
    security: {
      roles: [],
    },
  };

  return (
    <UserInviteCreateModal
      title={'edit'}
      subtitle={t('form.subtitle', { supplierName: providerProducts?.name })}
      open={open}
      onClose={onClose}
      initValue={dataInit}
      loadingInitData={isLoading}
      dataError={error}
      Form={SupplierUserInviteForm}
      schema={providerInvitationSchema}
    />
  );
};

export default memo(SupplierAddUserInviteEditModal);
