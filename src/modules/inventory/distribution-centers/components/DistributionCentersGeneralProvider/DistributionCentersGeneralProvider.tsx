import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import DistributionCentersProviderUpdateContainer from 'modules/inventory/distribution-centers/containers/GeneralTabs/DistributionCentersProviderUpdateContainer';
import { DetailList } from 'components/DetailList';
import { renderNameLink } from 'modules/inventory/common/components/NameLink/NameLink';
import { filterByLabel } from 'components/DetailList/DetailList';
import { isEmpty } from 'lodash';

const DistributionCentersGeneralProvider = () => {
  const { t } = useTranslation('distributionCenters');
  const { isLoading, error, distributionCenter, onOneClose, onOneToggle, state } = useDistributionCenterDetail();
  const open = useMemo(() => state?.form_5 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_5'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_5'), [onOneClose]);

  const distributionCenterData = useMemo(() => {
    if (!distributionCenter) return [];

    const items = Object.entries(distributionCenter).map(([key, value]) => {
      return {
        key,
        label: t(`fields.${key}`),
        value: renderNameLink({
          name: distributionCenter?.logistic?.name || '',
          route: `/inventory/settings/logistics/${distributionCenter?.logistic?._id as string}/general`,
          noLink: isEmpty(distributionCenter?.logistic?._id),
        }),
      };
    });
    return filterByLabel(items, ['logistic']);
  }, [t, distributionCenter]);

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
      <DetailList data={distributionCenterData} isLoading={isLoading} />
    </FormPaper>
  );
};

export default memo(DistributionCentersGeneralProvider);
