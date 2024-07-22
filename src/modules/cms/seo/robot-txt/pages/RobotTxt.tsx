import { memo } from 'react';
import RobotTxtContainer from '../containers/RobotTxtContainer';
import { auditLogRobotTxtFilters } from 'modules/security/audit-logs/constants';
import { CenterPageLayout } from 'layouts/index';
import { useFindRobotTxts } from '../hooks/useFindRobotTxts';
import { AuditLogEntityProvider } from 'modules/security/audit-logs/context/AuditLogEntityContext';
import { TableProvider } from '@dfl/mui-admin-layout';

const RobotTxt = () => {
  return (
    <CenterPageLayout>
      <TableProvider id={'robot-txt-audit-log'} filters={auditLogRobotTxtFilters}>
        <AuditLogEntityProvider useHook={useFindRobotTxts}>
          <RobotTxtContainer />
        </AuditLogEntityProvider>
      </TableProvider>
    </CenterPageLayout>
  );
};

export default memo(RobotTxt);
