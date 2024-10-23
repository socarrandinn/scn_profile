import { memo, useCallback, useMemo } from 'react';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { simpleColumns } from 'modules/inventory/distribution-centers/constants/distribution-centers.simple.columns';
import { renderContactList } from 'modules/common/components/ContactList/ContactList';
import DistributionCentersDetailContactUpdateContainer from 'modules/inventory/distribution-centers/containers/GeneralTabs/DistributionCentersDetailContactUpdateContainer';
import { IDistributionCenters } from '../../interfaces';

const StoreGeneralContact = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, distributionCenter, onOneClose, onOneToggle, state } = useDistributionCenterDetail();
  const open = useMemo(() => state?.form_3 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_3'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_3'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.contact.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <DistributionCentersDetailContactUpdateContainer
          initValue={{
            _id: distributionCenter?._id,
            contacts: distributionCenter?.contacts,
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
        data={getArray(distributionCenter as IDistributionCenters) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralContact);

const getArray = (data: IDistributionCenters): any[] => {
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
