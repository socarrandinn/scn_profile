import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { renderContactList } from 'modules/common/components/ContactList/ContactList';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import { simpleColumns } from 'modules/inventory/provider/supplier/constants/supplier.simple.columns';
import { ILogistics } from '../../interfaces';
import LogisticDetailContactUpdateContainer from '../../containers/LogisticDetailContactUpdateContainer';

const LogisticGeneralContact = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, logistic } = useLogisticsDetailContext();
  const { isOpen, onClose, onToggle } = useToggle(false);

  if (isOpen) {
    return (
      <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <LogisticDetailContactUpdateContainer
          onClose={onClose}
          initValue={{
            _id: logistic?._id,
            contacts: logistic?.contacts,
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
        data={getArray(logistic as ILogistics) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(LogisticGeneralContact);

const getArray = (data: ILogistics): any[] => {
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
