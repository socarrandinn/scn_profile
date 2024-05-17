import { memo } from 'react';
import RobotTxtContainer from '../containers/RobotTxtContainer';
import { RobotTxtProvider } from '../contexts/RobotTxtContext';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { auditLogRobotTxtFilters } from 'modules/security/audit-logs/constants';
import { CenterPageLayout } from 'layouts/index';

const RobotTxt = () => {
  return (
    <CenterPageLayout>
      <HeaderFilterContext id={'robot-txt-history'} filters={auditLogRobotTxtFilters} intervalFilter={'createdAt'}>
        <RobotTxtProvider>
          <RobotTxtContainer />
        </RobotTxtProvider>
      </HeaderFilterContext>
    </CenterPageLayout>
  );
};

export default memo(RobotTxt);
