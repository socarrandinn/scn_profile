import { memo } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import NoFoodIcon from '@mui/icons-material/NoFood';
// import {EditLink} from "@dfl/mui-admin-layout";

type CategoryCellProps = {
  categoryId: string;
  name: string;
  image?: IImageMedia;
};
// <EditLink entityId={data._id as string}>{name}</EditLink>
const CategoryCell = ({ categoryId, name, image }: CategoryCellProps) => {
  return (
        <ReactLink to={`/inventory/settings/categories/${categoryId}/general`} underline={'hover'}>
            <FlexBox alignItems={'center'} gap={1}>
                <AvatarMedia name={name} avatar={image} variant={'rounded'}>
                    <NoFoodIcon fontSize='small'/>
                </AvatarMedia>
                <Typography>{name}</Typography>
            </FlexBox>
        </ReactLink>
  );
};

export default memo(CategoryCell);
