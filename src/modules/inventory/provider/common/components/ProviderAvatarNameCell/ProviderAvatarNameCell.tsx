import { memo, useMemo } from 'react';
import { Badge, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import NoFoodIcon from '@mui/icons-material/NoFood';
import { LogisticProvider } from 'modules/inventory/provider/common/constants';
import { LOGISTIC } from 'modules/inventory/constants/entities.style';

type ProviderAvatarNameCellProps = {
  link: string;
  name: string;
  secondary?: string;
  variant?: 'circular' | 'rounded' | 'square';
  image?: IImageMedia;
  hideImage?: boolean;
  type: string;
};

const ProviderAvatarNameCell = ({
  link,
  name,
  secondary,
  image,
  variant,
  hideImage,
  type,
}: ProviderAvatarNameCellProps) => {
  const isLogistic = useMemo(() => type === LogisticProvider, [type]);

  return (
    <ReactLink to={link} underline={'hover'}>
      <FlexBox alignItems={'center'} gap={1}>
        {!hideImage && (
          <Badge
            badgeContent={isLogistic ? ' ' : null}
            sx={{ '& .MuiBadge-badge': { backgroundColor: LOGISTIC.COLOR } }}
          >
            <AvatarMedia name={name} avatar={image} variant={variant}>
              <NoFoodIcon fontSize='small' />
            </AvatarMedia>
          </Badge>
        )}
        <FlexBox flexDirection={'column'} gap={0}>
          <Typography>{name}</Typography>
          {secondary && (
            <Typography variant={'caption'} color={'text.secondary'}>
              {secondary}
            </Typography>
          )}
        </FlexBox>
      </FlexBox>
    </ReactLink>
  );
};

export default memo(ProviderAvatarNameCell);
