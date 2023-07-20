import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useFindOneLogistics } from 'modules/provider/logistics/hooks/useFindOneLogistics';
import LogisticsCreate from 'modules/provider/logistics/containers/LogisticsCreate';

const EditLogistics = () => {
  const { id } = useParams();
  const {
    data,
  } = useFindOneLogistics(id as string);

  return (
    <>
    <LogisticsCreate title={'edit'} initValue={data} />
    </>
  );
};
export default memo(EditLogistics);
