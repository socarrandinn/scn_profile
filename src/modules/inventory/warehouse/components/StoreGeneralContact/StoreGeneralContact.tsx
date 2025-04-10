import { memo, useCallback, useMemo } from 'react';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { renderContactList } from 'modules/common/components/ContactList/ContactList';
import StoreDetailContactUpdateContainer from 'modules/inventory/warehouse/containers/GeneralTabs/StoreDetailContactUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { WAREHOUSE_PERMISSIONS } from '../../constants';

const StoreGeneralContact = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, warehouse, onOneClose, onOneToggle, state } = useWarehouseDetail();
  const open = useMemo(() => state?.form_3 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_3'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_3'), [onOneClose]);

  if (open) {
    return (
      <FormPaper
        mbHeader={'8px'}
        title={t('fields.contact.title')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
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
    <FormPaper
      mbHeader={'0px'}
      title={t('fields.contact.title')}
      actions={
        <FormPaperAction onToggle={handleToggle} open={open} permissions={[WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE]} />
      }
    >
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
      value: renderContactList(data?.contacts?.phones) || '-',
    },
    {
      label: 'fields.contact.emails',
      value: renderContactList(data?.contacts?.emails) || '-',
    },
  ];
  return array;
};
