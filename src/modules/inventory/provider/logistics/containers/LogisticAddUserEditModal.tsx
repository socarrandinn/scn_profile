import { memo } from 'react';
import UserProviderCreateModal from 'modules/security/users/containers/UserProviderCreateModal';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import { IUserInvite } from 'modules/security/users/interfaces/IUserInvite';
import { initialUserInviteValue } from 'modules/security/users/hooks/useUserProviderCreateForm';
import { LogisticUserInviteForm } from '../components/LogisticUserInviteForm';
import { useTranslation } from 'react-i18next';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

type LogisticAddUserEditModalProps = {
  open: boolean;
  onClose: () => void;
};

const LogisticAddUserEditModal = ({ onClose, open }: LogisticAddUserEditModalProps) => {
  const { logisticId, logistic, isLoading, error } = useLogisticsDetailContext();
  const { t } = useTranslation('supplier');

  const dataInit: IUserInvite = {
    ...initialUserInviteValue,
    provider: logisticId as string,
    type: ROLE_PROVIDER_TYPE_ENUM.LOGISTIC,
  };

  return (
    <UserProviderCreateModal
      title={'edit'}
      subtitle={t('form.subtitle', { supplierName: logistic?.name })}
      open={open}
      onClose={onClose}
      initValue={dataInit}
      loadingInitData={isLoading}
      dataError={error}
      Form={LogisticUserInviteForm}
    />
  );
};

export default memo(LogisticAddUserEditModal);
