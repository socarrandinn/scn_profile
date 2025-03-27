import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import { ConditionContainer, PageLoader } from '@dfl/mui-react-common';
import incidenceDetailsRoutes from '../../routes/incidence-details';
import { useIncidenceDetail } from '../../context/IncidenceDetailContext';

const IncidenceDetailsContent = () => {
  const { incidenceId, isLoading } = useIncidenceDetail();

  return (
    <ConditionContainer active={!isLoading} alternative={<PageLoader />}>
      <RouteLoader routes={incidenceDetailsRoutes} notfoundRedirect={`/sales/incidences/${incidenceId}/general`} />
    </ConditionContainer>
  );
};

export default memo(IncidenceDetailsContent);
