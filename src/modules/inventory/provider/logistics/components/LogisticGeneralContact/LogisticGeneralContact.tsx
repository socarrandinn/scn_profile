import { memo, useCallback, useMemo } from 'react';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { renderContactList } from 'modules/common/components/ContactList/ContactList';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import { ILogistics } from '../../interfaces';
import LogisticDetailContactUpdateContainer from '../../containers/LogisticDetailContactUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const LogisticGeneralContact = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, logistic, state, onOneToggle, onOneClose } = useLogisticsDetailContext();
  const open = useMemo(() => state?.form_3 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_3'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_3'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <LogisticDetailContactUpdateContainer
          onClose={handleClose}
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
    <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
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
