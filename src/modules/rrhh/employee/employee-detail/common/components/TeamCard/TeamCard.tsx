import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import { FlexBox } from '@dfl/mui-react-common';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { ReactLink } from '@dfl/react-security';
import { ITeam } from 'modules/rrhh/team/interfaces';

type Props = {
  value?: ITeam | null;
};

const TeamCard = ({ value }: Props) => {
  const { t } = useTranslation('employee');

  if (!value?._id) {
    return <></>;
  }

  return (
    <Box>
      <SubSectionTitle>{t('fields.hiring.date')}</SubSectionTitle>
      <ReactLink to={`/rrhh/teams/${value._id}`} underline={'hover'}>
        <FlexBox alignItems={'center'} gap={1}>
          <Avatar alt={value?.name} src={value?.icon} />
          <Stack>
            <Typography>{value?.name}</Typography>
          </Stack>
        </FlexBox>
      </ReactLink>
    </Box>
  );
};

export default memo(TeamCard);
