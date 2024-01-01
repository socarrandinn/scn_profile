import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IStore } from 'modules/inventory/store/interfaces';
import StoreDetailBasicUpdateContainer from 'modules/inventory/store/containers/GeneralTabs/StoreDetailBasicUpdateContainer';

const StoreGeneralBasic = () => {
  const { t } = useTranslation('provider');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, store } = useStoreDetail();

  if (isOpen) {
    return (
      <FormPaper
        nm
        title={t('fields.basicInformation')}
        actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}
      >
        <StoreDetailBasicUpdateContainer
          initValue={{
            _id: store?._id,
            name: store?.name,
            description: store?.description,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(store as IStore) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralBasic);

const getArray = (data: IStore): any[] => {
  const array = [
    {
      label: 'fields.name',
      value: data?.name,
    },
    {
      label: 'fields.description',
      value: data?.description,
    },
  ];
  return array;
};
