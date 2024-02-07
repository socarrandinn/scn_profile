import { useMemo } from 'react';
import { useAuditLogEntityContext } from '../context/AuditLogEntityContext';

export const useFindOneLocalEntityById = () => {
  const { checkEntity, data } = useAuditLogEntityContext();

  const entity = useMemo(() => data?.data?.find((ent) => ent._id === checkEntity), [checkEntity, data]);

  return {
    entity,
  };
};
