import { memo } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import NoFoodIcon from '@mui/icons-material/NoFood';

type AvatarNameCellProps = {
  link: string;
  name?: string;
  secondary?: string;
  variant?: 'circular' | 'rounded' | 'square';
  image?: IImageMedia;
  hideImage?: boolean;
};

const AvatarNameCell = ({ link, name, secondary, image, variant, hideImage }: AvatarNameCellProps) => {
  return (
    <ReactLink to={link} underline={'hover'}>
      <FlexBox alignItems={'center'} gap={1}>
        {!hideImage && (
          <AvatarMedia name={name} avatar={image} variant={variant}>
            <NoFoodIcon fontSize='small' />
          </AvatarMedia>
        )}
        {name && (
          <FlexBox flexDirection={'column'} gap={0}>
            <Typography>{name}</Typography>
            {secondary && (
              <Typography variant={'caption'} color={'text.secondary'}>
                {secondary}
              </Typography>
            )}
          </FlexBox>
        )}
      </FlexBox>
    </ReactLink>
  );
};

export default memo(AvatarNameCell);
