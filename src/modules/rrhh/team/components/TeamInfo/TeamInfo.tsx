import React, { memo } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { DetailStack, TagList } from '@dfl/mui-react-common';
import { useParams } from 'react-router';
import { useFindOneTeam } from 'modules/rrhh/team/hooks/useFindOneTeam';
import { UpdateTeamIcon } from 'modules/rrhh/team/components/UpdateTeamIcon';
import { DETAILS_SUMMARY } from 'modules/rrhh/team/constants/team_details_summary';
import { useTranslation } from 'react-i18next';
import EmployeeCell from 'modules/rrhh/employee/management/components/EmployeeCell/EmployeeCell';
import { IEmployee } from 'modules/rrhh/employee/common/interfaces';
import { getFullName } from 'utils';

const TeamInfo = () => {
  const { id } = useParams();
  const { data: team } = useFindOneTeam(id || null, true);
  const { t } = useTranslation('team');

  const manager = team?.manager as IEmployee;

  return (
    <Stack p={2} pt={5} spacing={2}>
      <Stack direction='column' alignItems='center' spacing={0}>
        <UpdateTeamIcon />

        <Typography variant={'h2'} mt={2}>
          {team?.name}
        </Typography>
        <Typography color={'text.secondary'} className={'mx-2 mt-2'}>
          {team?.description}
        </Typography>
        {team?.tags && <TagList value={team?.tags } />}
      </Stack>
      <DetailStack details={DETAILS_SUMMARY} data={team} />
      <EmployeeCell
        className={'mx-2'}
        avatar={manager?.general?.avatar}
        employeeId={manager?._id}
        name={getFullName(manager?.general?.firstName, manager?.general?.lastName)}
        category={manager?.category?.name}
        titleComponent={<Box sx={{ mb: 1 }}>{t('fields.leader')}</Box>}
      />
    </Stack>
  );
};

export default memo(TeamInfo);
