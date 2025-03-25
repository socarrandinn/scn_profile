import { FlexBox, LongText } from '@dfl/mui-react-common';
import { Person } from '@mui/icons-material';
import { Stack, SxProps, Typography } from '@mui/material';
import { AvatarMedia } from 'components/AvatarMedia';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useTranslation } from 'react-i18next';

type Props = {
  data: Partial<IUser>;
  title?: string;
  sx?: SxProps
};

const ResponsibleCell = ({ data, title, sx }: Props) => {
  const { t } = useTranslation('incidence');

  return (
    <FlexBox justifyContent={'space-between'} alignItems={'center'} sx={sx}>
      <Typography variant={'h4'}>{t(title || 'fields.assignedTo')}</Typography>
      <Stack flexDirection={'row'} alignItems={'center'} gap={1} sx={{ background: '#E9EBEF', borderRadius: '16px', pr: 2 }}>
        <AvatarMedia name={data?.fullName} avatar={data?.avatar} sx={{ width: 32, height: 32, }}>
          <Person />
        </AvatarMedia>
        <LongText lineClamp={1} text={data?.fullName} />
      </Stack>
    </FlexBox>
  );
};

export default ResponsibleCell;
