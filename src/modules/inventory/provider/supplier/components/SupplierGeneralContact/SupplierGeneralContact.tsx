import { memo, useCallback, useMemo } from 'react';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
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
  const { isLoading, error, providerProducts, onOneClose, onOneToggle, state } = useProviderProductsDetail();
  const open = useMemo(() => state?.form_3 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_3'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_3'), [onOneToggle]);

  if (open) {
    return (
      <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <SupplierDetailContactUpdateContainer
          onClose={handleClose}
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
    <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
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
