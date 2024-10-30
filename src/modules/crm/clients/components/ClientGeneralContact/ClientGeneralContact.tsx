import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IClients } from 'modules/crm/clients/interfaces';
import { useClientDetails } from 'modules/crm/clients/context/ClientDetailsContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ClientDetailContactUpdateContainer from 'modules/crm/clients/containers/ClientDetailContactUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const ClientGeneralContact = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, client, onOneClose, onOneToggle, state } = useClientDetails();
  const open = useMemo(() => state?.contactForm || false, [state]);

  const handleToggle = useCallback(() => onOneToggle?.('contactForm'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('contactForm'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <ClientDetailContactUpdateContainer
          initValue={{ _id: client?._id, email: client?.email, phone: client?.phone }}
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
        data={getArray(client as IClients) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default ClientGeneralContact;

const getArray = (data: IClients): any[] => {
  const array = [
    {
      label: 'clients:fields.email',
      value: data?.email,
    },
    {
      label: 'clients:fields.phone',
      value: data?.phone,
    },
  ];
  return array;
};
