import { memo } from 'react';
import DispatchDetailContainer from '../containers/DispatchDetailContainer';
import { useParams } from 'react-router';
import { DispatchProvider } from '../contexts/dispatchContext';

const DispatchDetails = () => {
  const { id } = useParams();
  return (
    <DispatchProvider dispatchId={id as string}>
      <DispatchDetailContainer />
    </DispatchProvider>
  );
};

export default memo(DispatchDetails);
