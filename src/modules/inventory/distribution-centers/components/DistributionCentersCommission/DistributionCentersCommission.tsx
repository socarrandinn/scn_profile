import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { DISTRIBUTION_CENTER_PERMISSIONS } from '../../constants';
import DistributionCentersCommissionUpdate from '../../containers/GeneralTabs/DistributionCentersCommissionUpdate';
import PriceCell from 'modules/security/audit-logs/components/TableCells/PriceCell';

const DistributionCenterCommission = () => {
  const { t } = useTranslation('distributionCenters');
  const { isLoading, error, distributionCenter, onOneClose, onOneToggle, state } = useDistributionCenterDetail();
  const open = useMemo(() => state?.form_6 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_6'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_6'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('handlingCost.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <DistributionCentersCommissionUpdate
          initValue={{
            _id: distributionCenter?._id,
            handlingCost: distributionCenter?.handlingCost,
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
      title={t('handlingCost.title')}
      actions={
        <FormPaperAction
          onToggle={handleToggle}
          open={open}
          permissions={[DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_WRITE]}
        />
      }
    >
      <PriceCell value={distributionCenter?.handlingCost} />
    </FormPaper>
  );
};

export default memo(DistributionCenterCommission);
