import { memo } from 'react';
import { ReactLink } from '@dfl/react-security';
import { FlexBox } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import { AvatarMedia } from 'components/AvatarMedia';
import { useFindOneUsers } from 'modules/security/users/hooks/useFindOneUsers';

type ProviderViewProps = {
  userid: string;
};

const ProviderView = ({ userid }: ProviderViewProps) => {
  const { data } = useFindOneUsers(userid);
  return (
    <ReactLink to={`/security/users/${data?._id as string}/general`} underline={'hover'}>
      <FlexBox alignItems={'center'} gap={1}>
        <AvatarMedia name={data?.fullName} avatar={data?.avatar}/>
        <Stack>
          <Typography>{data?.fullName}</Typography>
        </Stack>
      </FlexBox>
    </ReactLink>
  );
}

export default memo(ProviderView);
