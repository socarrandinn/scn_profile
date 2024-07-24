import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaper } from 'modules/common/components/FormPaper';
import { simpleColumns } from 'modules/inventory/provider/supplier/constants/supplier.simple.columns';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IClients } from '../../interfaces';
import { useClientDetails } from '../../context/ClientDetailsContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import ClientDetailBasicUpdateContainer from '../../containers/ClientDetailBasicUpdateContainer';

const ClientGeneralBasic = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, client, onOneClose, onOneToggle, state } = useClientDetails();
  const open = useMemo(() => state?.basicForm || false, [state]);

  const handleToggle = useCallback(() => onOneToggle?.('basicForm'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('basicForm'), [onOneClose]);

  if (open) {
    return (
      <FormPaper
        nm
        title={t('fields.basicInformation')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
        <ClientDetailBasicUpdateContainer
          initValue={{ _id: client?._id, firstName: client?.firstName, lastName: client?.lastName }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      nm
      title={t('fields.basicInformation')}
      actions={<FormPaperAction onToggle={handleToggle} open={open} />}
    >
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(client as IClients) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default ClientGeneralBasic;

const getArray = (data: IClients): any[] => {
  const array = [
    {
      label: 'clients:fields.firstName',
      value: data?.firstName,
    },
    {
      label: 'clients:fields.lastName',
      value: data?.lastName,
    },
  ];
  return array;
};
