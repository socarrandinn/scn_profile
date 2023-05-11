import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import TimeOffPoliciesContainer from 'modules/rrhh/settings/time-off-policies/containers/TimeOffPoliciesContainer';

const TimeOffPoliciesList = () => {
  return (
    <PageLayout>
      <TableProvider id={'timeOffPolicies'}>
        <TimeOffPoliciesContainer />
      </TableProvider>
    </PageLayout>
  );
};

export default memo(TimeOffPoliciesList);
