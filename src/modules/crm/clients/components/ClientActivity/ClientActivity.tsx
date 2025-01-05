import ActivityContainer from 'modules/common/containers/ActivityContainer';
import { useFindAuditLogsByUser } from 'modules/security/audit-logs/hooks/useFindAuditLogsByUser';
import { memo } from 'react';
import { useParams } from 'react-router';

const ClientActivity = () => {
  const { id } = useParams();
  const { data, isLoading } = useFindAuditLogsByUser(id);

  return (
    <ActivityContainer isLoading={isLoading} data={data} />
  );
};

export default memo(ClientActivity);
