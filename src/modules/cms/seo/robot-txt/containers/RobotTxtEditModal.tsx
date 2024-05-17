import { memo, useCallback } from 'react';
import RobotTxtCreateModal from 'modules/cms/seo/robot-txt/containers/RobotTxtCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneRobotTxt } from 'modules/cms/seo/robot-txt/hooks/useFindOneRobotTxt';

const RobotTxtEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneRobotTxt(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <RobotTxtCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(RobotTxtEditModal);
