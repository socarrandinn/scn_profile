import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { H3 } from '@dfl/mui-react-common';
import { useFindEmployeeByTeam } from 'modules/store/employee/management/hooks/useFindEmployeeByTeam';
import { teamMemberColumns } from 'modules/store/employee/team/constants/team_member.columns';
import { TeamMemberListToolbar } from 'modules/store/employee/team/components/TeamMemberListToolbar';
import { useSecurity } from '@dfl/react-security';
import { has } from 'lodash';
import { EMPLOYEE_PERMISSIONS } from 'modules/store/employee/management/constants';

type Props = {
  teamId: string;
};

const TeamMembersList = ({ teamId }: Props) => {
  const { isLoading, error, data } = useFindEmployeeByTeam(teamId);
  const { t } = useTranslation('team');
  const { hasPermission } = useSecurity()
  const canWrite = hasPermission(EMPLOYEE_PERMISSIONS.EMPLOYEE_WRITE)

  return (
        <Box>
            <H3>{t('memberList')}</H3>
            <TeamMemberListToolbar teamId={teamId}/>
            <Table
                columns={teamMemberColumns}
                data={data?.data}
                total={data?.total}
                isLoading={isLoading}
                error={error}
                select={canWrite}
            />
        </Box>
  );
};

export default memo(TeamMembersList);
