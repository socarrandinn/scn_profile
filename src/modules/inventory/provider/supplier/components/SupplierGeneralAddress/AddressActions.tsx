import { memo } from 'react';
import SupplierDetailAddressCreateModal from '../../containers/SupplierDetailAddressCreateModal';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import { ProviderProductsDetail } from '../../context/ProviderProductDetail';
import { LoadingButton } from '@dfl/mui-react-common';

const AddressActions = () => {
  const { isLoading, providerProducts } = ProviderProductsDetail();
  const { t } = useTranslation(['common', 'provider']);
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <LoadingButton loading={isLoading} onClick={onOpen}>
        {t('updateInfo')}
      </LoadingButton>
      <SupplierDetailAddressCreateModal
        open={isOpen}
        onClose={onClose}
        title={t('updateAddress')}
        initValue={{
          _id: providerProducts?._id,
          address: providerProducts?.address,
        }}
      />
    </>
  );
};

export default memo(AddressActions);
