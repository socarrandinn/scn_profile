import { FormPaper } from 'modules/common/components/FormPaper';
import { useFindOneLocalEntityById } from 'modules/security/audit-logs/hooks/useFindOneLocalEntityById';
import { memo } from 'react';

const StaticSiteMapItemDetail = () => {
  const { entity } = useFindOneLocalEntityById();
  return (
    <FormPaper nm>
      <pre> {JSON.stringify(entity, null, 2)} </pre>
    </FormPaper>
  );
};

export default memo(StaticSiteMapItemDetail);
