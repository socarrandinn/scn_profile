import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';

type ProvicerLogCellProps = {
  ProviderLogisticId: string;
  name: string;
  avatar?: IImageMedia;
};
const ProvicerLogCell = ({ ProviderLogisticId, name, avatar }: ProvicerLogCellProps) => {
  return (<ReactLink to={`/security/users/${ProviderLogisticId}/general`} underline={'hover'}>
    <FlexBox alignItems={'center'} gap={1}>
      <AvatarMedia name={name} avatar={avatar}/>
      <Stack>
        <Typography>{name}</Typography>
      </Stack>
    </FlexBox>
  </ReactLink>);
}

export default memo(ProvicerLogCell);
