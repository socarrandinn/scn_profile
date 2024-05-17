import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { CenterPageLayout } from 'layouts/index';
import { memo } from 'react';
import RobotTxtContent from '../components/RobotTxtForm/RobotTxtContent';
import { RobotTxtHistory } from '../components/RobotTxtHistory';
import { useFindRobotTxt } from '../hooks/useFindRobotTxt';

const RobotTxtContainer = () => {
  const { data } = useFindRobotTxt();

  return (
    <CenterPageLayout>
      <DetailLayout>
        <DetailContent ghost>
          <RobotTxtContent newRobotText={(data as unknown as string) || ''} />
        </DetailContent>
        <DetailSummary ghost width={{ md: 400, lg: 450, xl: 500 }}>
          <RobotTxtHistory />
        </DetailSummary>
      </DetailLayout>
    </CenterPageLayout>
  );
};

export default memo(RobotTxtContainer);
