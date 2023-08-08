import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';

type ProviderProdCellProps = {
  ProdProductId: string;
  name: string;
  avatar?: IImageMedia;
};
const ProviderProdCell = ({
  ProdProductId,
  name,
  avatar
}: ProviderProdCellProps) => {
  return (<ReactLink to={`/store/settings/suppliers/${ProdProductId}/general`} underline={'hover'}>
    <FlexBox alignItems={'center'} gap={1}>
      <AvatarMedia name={name} avatar={avatar} variant={'rounded'} />
      <Stack>
        <Typography>{name}</Typography>
      </Stack>
    </FlexBox>
  </ReactLink>);
};

export default memo(ProviderProdCell);
