import { memo, useMemo } from 'react';
import { Typography } from '@mui/material';
import { FlexBox, LongText } from '@dfl/mui-react-common';
import { ReactLink, useSecurity } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import NoFoodIcon from '@mui/icons-material/NoFood';

type AvatarNameCellProps = {
  link?: string;
  name?: string;
  secondary?: string;
  variant?: 'circular' | 'rounded' | 'square';
  image?: IImageMedia;
  hideImage?: boolean;
  hideLink?: boolean;
  permissions?: string | string[]
};

const AvatarNameCell = ({ link = '/', name, secondary, image, variant, hideImage, hideLink, permissions }: AvatarNameCellProps) => {
  const { hasPermission } = useSecurity();

  const content = useMemo(
    () => (
      <FlexBox alignItems={'center'} gap={1}>
        {!hideImage && (
          <AvatarMedia name={name} avatar={image} variant={variant}>
            <NoFoodIcon fontSize='small' />
          </AvatarMedia>
        )}
        {name && (
          <FlexBox flexDirection={'column'} gap={0}>
            <LongText lineClamp={2} text={name} />
            {secondary && (
              <Typography variant={'caption'} color={'text.secondary'}>
                {secondary}
              </Typography>
            )}
          </FlexBox>
        )}
      </FlexBox>
    ),
    [hideImage, image, name, secondary, variant],
  );

  if (hideLink || (permissions && !hasPermission(permissions))) {
    return content;
  }

  return (
    <ReactLink to={link} underline={'hover'}>
      {content}
    </ReactLink>
  );
};

export default memo(AvatarNameCell);
