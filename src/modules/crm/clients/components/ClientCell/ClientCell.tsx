import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';

type ClientCellProps = {
  clientId: string;
  name: string;
  email?: string;
  avatar: IImageMedia;
};

const ClientCell = ({ clientId, name, email, avatar }: ClientCellProps) => {
  return (
    <ReactLink to={`/crm/clients/${clientId}/orders`} underline={'hover'}>
      <Stack direction={'row'} alignItems={'center'} gap={1}>
        <AvatarMedia name={name} avatar={avatar} />
        <Stack>
          <Typography>{name}</Typography>
          <Typography color={'text.secondary'} sx={{ textDecoration: 'none!important' }}>
            {email}
          </Typography>
        </Stack>
      </Stack>
    </ReactLink>
  );
};

export default memo(ClientCell);
