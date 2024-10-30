import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';

import StoreDetailBasicUpdateContainer from 'modules/inventory/distribution-centers/containers/GeneralTabs/DistributionCentersDetailBasicUpdateContainer';
import { IDistributionCenters } from '../../interfaces';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { FormPaper } from 'modules/common/components/FormPaper';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const DistributionCentersGeneralBasic = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, distributionCenter, onOneClose, onOneToggle, state } = useDistributionCenterDetail();
  const open = useMemo(() => state?.form_1 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_1'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_1'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <StoreDetailBasicUpdateContainer
          initValue={{
            _id: distributionCenter?._id,
            name: distributionCenter?.name,
            description: distributionCenter?.description,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(distributionCenter as IDistributionCenters) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(DistributionCentersGeneralBasic);

const getArray = (data: IDistributionCenters): any[] => {
  return [
    {
      label: 'fields.name',
      value: data?.name,
    },
    {
      label: 'fields.description',
      value: data?.description,
    },
  ];
};
