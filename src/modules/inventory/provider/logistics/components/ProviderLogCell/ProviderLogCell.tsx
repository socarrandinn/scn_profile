import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';

type ProviderLogCellProps = {
  ProviderLogisticId: string;
  name: string;
  avatar?: IImageMedia;
  hideImage?: boolean;
  withoutLink?: boolean;
};
const ProviderLogCell = ({ ProviderLogisticId, name, avatar, hideImage, withoutLink }: ProviderLogCellProps) => {
  if (withoutLink) {
    return (
      <FlexBox alignItems={'center'} gap={1}>
        {!hideImage && <AvatarMedia name={name} avatar={avatar} variant={'rounded'} />}
        <Stack>
          <Typography>{name}</Typography>
        </Stack>
      </FlexBox>
    );
  }

  return (
    <ReactLink to={`/inventory/settings/logistics/${ProviderLogisticId}/general`} underline={'hover'}>
      <FlexBox alignItems={'center'} gap={1}>
        {!hideImage && <AvatarMedia name={name} avatar={avatar} variant={'rounded'} />}
        <Stack>
          <Typography>{name}</Typography>
        </Stack>
      </FlexBox>
    </ReactLink>
  );
};

export default memo(ProviderLogCell);
