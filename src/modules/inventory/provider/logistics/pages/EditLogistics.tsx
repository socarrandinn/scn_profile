import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useFindOneLogistics } from 'modules/inventory/provider/logistics/hooks/useFindOneLogistics';
import LogisticsCreate from 'modules/inventory/provider/logistics/containers/LogisticsCreate';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';

const EditLogistics = () => {
  const { id } = useParams();
  const { data, isLoading } = useFindOneLogistics(id as string);
  useBreadcrumbName(data?._id || '', data?.name, isLoading);
  return (
    <>
      <LogisticsCreate title={'edit'} initValue={data} />
    </>
  );
};
export default memo(EditLogistics);
