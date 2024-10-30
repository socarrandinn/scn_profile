import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import DistributionCentersProviderUpdateContainer from 'modules/inventory/distribution-centers/containers/GeneralTabs/DistributionCentersProviderUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const DistributionCentersGeneralProvider = () => {
  const { t } = useTranslation('distributionCenters');

  const { isLoading, error, distributionCenter, onOneClose, onOneToggle, state } = useDistributionCenterDetail();

  const open = useMemo(() => state?.form_5 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_5'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_5'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.logistic')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <DistributionCentersProviderUpdateContainer
          initValue={{
            _id: distributionCenter?._id,
            logistic: distributionCenter?.logistic._id,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('fields.logistic')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(distributionCenter as IDistributionCenters) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(DistributionCentersGeneralProvider);

const getArray = (data: IDistributionCenters): any[] => {
  const array = [
    {
      label: 'distributionCenters:fields.logistic',
      value: data?.logistic?.name,
    },
  ];
  return array;
};
