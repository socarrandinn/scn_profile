import { memo } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import NoFoodIcon from '@mui/icons-material/NoFood';

type CategoryCellProps = {
  manufacid: string;
  name: string;
  image?: IImageMedia;
};
const ManufactireCell = ({ manufacid, name, image }: CategoryCellProps) => {
  return (
        <ReactLink to={`/provider/manufactures/${manufacid}/general`} underline={'hover'}>
            <FlexBox alignItems={'center'} gap={1}>
                <AvatarMedia name={name} avatar={image} variant={'rounded'}>
                    <NoFoodIcon fontSize='small'/>
                </AvatarMedia>
                <Typography>{name}</Typography>
            </FlexBox>
        </ReactLink>
  );
};

export default memo(ManufactireCell);
