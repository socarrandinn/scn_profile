import { memo, useCallback, useMemo } from 'react';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/inventory/warehouse/constants/warehouse.simple.columns';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { renderContactList } from 'modules/common/components/ContactList/ContactList';
import StoreDetailContactUpdateContainer from 'modules/inventory/warehouse/containers/GeneralTabs/StoreDetailContactUpdateContainer';

const StoreGeneralContact = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, warehouse, onOneClose, onOneToggle, state } = useWarehouseDetail();
  const open = useMemo(() => state?.form_3 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_3'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_3'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <StoreDetailContactUpdateContainer
          initValue={{
            _id: warehouse?._id,
            contacts: warehouse?.contacts,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }
  return (
    <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(warehouse as IWarehouse) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralContact);

const getArray = (data: IWarehouse): any[] => {
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
