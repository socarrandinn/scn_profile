import { memo } from 'react';
import { useStoreDetail } from '../../context/StoreContext';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { IStore } from 'modules/inventory/store/interfaces';
import { renderContactList } from 'modules/common/components/ContactList/ContactList';
import StoreDetailContactUpdateContainer from 'modules/inventory/store/containers/GeneralTabs/StoreDetailContactUpdateContainer';

const StoreGeneralContact = () => {
  const { t } = useTranslation('provider');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, store } = useStoreDetail();

  if (isOpen) {
    return (
      <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <StoreDetailContactUpdateContainer
          initValue={{
            _id: store?._id,
            contacts: store?.contacts,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }
  return (
    <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(store as IStore) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralContact);

const getArray = (data: IStore): any[] => {
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
