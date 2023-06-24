import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox, imageUrl } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';

type UserCellProps = {
  userId: string;
  name: string;
  email?: string;
  avatar: IImageMedia;
};

const UserCell = ({ userId, name, email, avatar }: UserCellProps) => {
  return (
        <ReactLink to={`/security/users/${userId}/general`} underline={'hover'}>
            <FlexBox alignItems={'center'} gap={1}>
                <AvatarMedia name={name} avatar={avatar}/>
                <Stack>
                    <Typography>{name}</Typography>
                    <Typography color={'text.secondary'} sx={{ textDecoration: 'none!important' }}>
                        {email}
                    </Typography>
                </Stack>
            </FlexBox>
        </ReactLink>
  );
};

export default memo(UserCell);
