import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import RobotTxtContent from '../components/RobotTxtForm/RobotTxtContent';
import SeoHistoryContent from '../../common/components/SeoHistoryContent/SeoHistoryContent';

const RobotTxtContainer = () => {
  return (
    <DetailLayout mb={8}>
      <DetailContent ghost>
        <RobotTxtContent />
      </DetailContent>
      <DetailSummary ghost width={{ md: '50%', lg: '50%', xl: '50%' }}>
        <SeoHistoryContent />
      </DetailSummary>
    </DetailLayout>
  );
};

export default memo(RobotTxtContainer);
