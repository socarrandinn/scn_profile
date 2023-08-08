import { memo } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import NoFoodIcon from '@mui/icons-material/NoFood';

type ManufactureCellProps = {
  manufactured: string;
  name: string;
  image?: IImageMedia;
};
const ManufactureCell = ({ manufactured, name, image }: ManufactureCellProps) => {
  return (
        <ReactLink to={`/provider/manufactures/${manufactured}/general`} underline={'hover'}>
            <FlexBox alignItems={'center'} gap={1}>
                <AvatarMedia name={name} avatar={image} variant={'rounded'}>
                    <NoFoodIcon fontSize='small'/>
                </AvatarMedia>
                <Typography>{name}</Typography>
            </FlexBox>
        </ReactLink>
  );
};

export default memo(ManufactureCell);
