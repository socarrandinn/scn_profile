import { memo } from 'react';
import UserProviderCreateModal from 'modules/security/users/containers/UserProviderCreateModal';
import { IUserInvite } from 'modules/security/users/interfaces/IUserInvite';
import { initialUserInviteValue } from 'modules/security/users/hooks/useUserProviderCreateForm';
import { useTranslation } from 'react-i18next';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { SupplierUserInviteForm } from '../components/SupplierUserInviteForm';
import { useProviderProductsDetail } from '../context/ProviderProductDetail';

type SupplierAddUserInviteEditModalProps = {
  open: boolean;
  onClose: () => void;
};

const SupplierAddUserInviteEditModal = ({ onClose, open }: SupplierAddUserInviteEditModalProps) => {
  const { providerProductsId, providerProducts, isLoading, error } = useProviderProductsDetail();
  const { t } = useTranslation('supplier');

  const dataInit: IUserInvite = {
    ...initialUserInviteValue,
    provider: providerProductsId as string,
    type: ROLE_PROVIDER_TYPE_ENUM.PRODUCT,
  };

  return (
    <UserProviderCreateModal
      title={'edit'}
      subtitle={t('form.subtitle', { supplierName: providerProducts?.name })}
      open={open}
      onClose={onClose}
      initValue={dataInit}
      loadingInitData={isLoading}
      dataError={error}
      Form={SupplierUserInviteForm}
    />
  );
};

export default memo(SupplierAddUserInviteEditModal);
