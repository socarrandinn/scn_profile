import { memo } from 'react';
import { ProviderProductsDetail } from '../../context/ProviderProductDetail';
import { useToggle } from '@dfl/hook-utils';
import SupplierDetailContactUpdateContainer from '../../containers/SupplierDetailContactUpdateContainer';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from '../../constants/supplier.simple.columns';
import { ISupplier } from '../../interfaces';
import { renderContactList } from 'modules/common/components/ContactList/ContactList';

const SupplierGeneralContact = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, providerProducts } = ProviderProductsDetail();
  const { isOpen, onClose, onToggle } = useToggle(false);

  if (isOpen) {
    return (
      <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <SupplierDetailContactUpdateContainer
          onClose={onClose}
          initValue={{
            _id: providerProducts?._id,
            contacts: providerProducts?.contacts,
          }}
          dataError={error}
          loadingInitData={isLoading}
        />
      </FormPaper>
    );
  }
  return (
    <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(providerProducts as ISupplier) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(SupplierGeneralContact);

const getArray = (data: ISupplier): any[] => {
  const array = [
    {
      label: 'fields.contact.phones',
      value: renderContactList(data?.contacts?.phones),
    },
    {
      label: 'fields.contact.emails',
      value: renderContactList(data?.contacts?.emails),
    },
  ];
  return array;
};
