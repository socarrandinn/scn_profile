import { memo } from 'react';
import IncidenceDetailContainer from '../containers/IncidenceDetailContainer';
import { PageLayout } from 'layouts/index';

const IncidenceDetails = () => {

  return (
    <PageLayout>
      <IncidenceDetailContainer />
    </PageLayout>
  );
};

export default memo(IncidenceDetails);
