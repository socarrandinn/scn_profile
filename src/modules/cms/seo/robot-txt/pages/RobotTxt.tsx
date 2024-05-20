import { memo } from 'react';
import RobotTxtContainer from '../containers/RobotTxtContainer';
import { HeaderFilterContext } from 'modules/security/audit-logs/context/HeaderFilterContext';
import { auditLogRobotTxtFilters } from 'modules/security/audit-logs/constants';
import { CenterPageLayout } from 'layouts/index';
import { useFindRobotTxts } from '../hooks/useFindRobotTxts';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';

const RobotTxt = () => {
  return (
    <CenterPageLayout>
      <HeaderFilterContext id={'robot-txt-history'} filters={auditLogRobotTxtFilters} intervalFilter={'createdAt'}>
        <AuditLogEntityProvider useHook={useFindRobotTxts}>
          <RobotTxtContainer />
        </AuditLogEntityProvider>
      </HeaderFilterContext>
    </CenterPageLayout>
  );
};

export default memo(RobotTxt);
