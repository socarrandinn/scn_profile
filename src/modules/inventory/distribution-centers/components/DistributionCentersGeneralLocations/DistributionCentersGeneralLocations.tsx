import { memo, useCallback } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import DistributionCentersGeneralLocationsDetails from './DistributionCentersGeneralLocationsDetails';
import { IconButton } from '@dfl/mui-react-common';
import { EditIcon } from 'components/icons/EditIcon';
import { useNavigate } from 'react-router';
import { TableProvider } from '@dfl/mui-admin-layout';

const DistributionCentersGeneralLocations = () => {
  const { t } = useTranslation('warehouse');
  const { distributionCenterId } = useDistributionCenterDetail();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/inventory/distribution-centers/${distributionCenterId as string}/general`)
  }, [navigate, distributionCenterId]);

  return (
    <FormPaper
      title={t('fields.locations')}
      actions={
        <IconButton color='primary' tooltip={t('common:updateInfo')} onClick={handleClick}>
          <EditIcon sx={{ fontSize: '17.586px' }} />
        </IconButton>
      }
    >
      <TableProvider id='distribution-center-locations'>
        <DistributionCentersGeneralLocationsDetails />
      </TableProvider>
    </FormPaper>
  );
};

export default memo(DistributionCentersGeneralLocations);
