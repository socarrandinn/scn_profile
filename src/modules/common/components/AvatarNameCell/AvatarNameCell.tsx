import { memo } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import NoFoodIcon from '@mui/icons-material/NoFood';

type AvatarNameCellProps = {
  link: string;
  name: string;
  variant?: 'circular' | 'rounded' | 'square';
  image?: IImageMedia;
};

const AvatarNameCell = ({ link, name, image, variant }: AvatarNameCellProps) => {
  return (
        <ReactLink to={link} underline={'hover'}>
            <FlexBox alignItems={'center'} gap={1}>
                <AvatarMedia name={name} avatar={image} variant={variant}>
                    <NoFoodIcon fontSize='small'/>
                </AvatarMedia>
                <Typography>{name}</Typography>
            </FlexBox>
        </ReactLink>
  );
};

export default memo(AvatarNameCell);
