import { memo, useCallback } from 'react';
import ReportCauseCreateModal from 'modules/crm/report-cause/containers/ReportCauseCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneReportCause } from 'modules/crm/report-cause/hooks/useFindOneReportCause';

const ReportCauseEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneReportCause(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ReportCauseCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ReportCauseEditModal);
