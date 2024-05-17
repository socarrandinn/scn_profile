import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import RobotTxtContent from '../components/RobotTxtForm/RobotTxtContent';
import { RobotTxtHistory } from '../components/RobotTxtHistory';

const RobotTxtContainer = () => {
  return (
    <DetailLayout mb={8}>
      <DetailContent ghost>
        <RobotTxtContent />
      </DetailContent>
      <DetailSummary ghost width={{ md: '50%', lg: '50%', xl: '50%' }}>
        <RobotTxtHistory />
      </DetailSummary>
    </DetailLayout>
  );
};

export default memo(RobotTxtContainer);
