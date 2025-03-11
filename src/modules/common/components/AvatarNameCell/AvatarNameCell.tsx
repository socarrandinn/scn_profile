import { memo, ReactNode, useMemo } from 'react';
import { Stack, StackProps, Typography } from '@mui/material';
import { LongText } from '@dfl/mui-react-common';
import { ReactLink, useSecurity } from '@dfl/react-security';
import { IImageMedia } from 'modules/common/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import NoFoodIcon from '@mui/icons-material/NoFood';

type AvatarNameCellProps = StackProps & {
  link?: string;
  name?: string;
  secondary?: string;
  variant?: 'circular' | 'rounded' | 'square';
  image?: IImageMedia;
  hideImage?: boolean;
  hideLink?: boolean;
  permissions?: string | string[];
  icon?: ReactNode;
};

const AvatarNameCell = ({
  link = '/',
  name,
  secondary,
  image,
  variant,
  hideImage,
  hideLink,
  permissions,
  icon,
  ...props
}: AvatarNameCellProps) => {
  const { hasPermission } = useSecurity();

  const content = useMemo(
    () => (
      <Stack flexDirection={'row'} alignItems={'center'} gap={1} {...props}>
        {!hideImage && (
          <AvatarMedia name={name} avatar={image} variant={variant} sx={{ backgroundColor: 'background.default' }}>
            {icon || <NoFoodIcon fontSize='small' />}
          </AvatarMedia>
        )}
        {name && (
          <Stack flexDirection={'column'} gap={0}>
            <LongText lineClamp={2} text={name} />
            {secondary && (
              <Typography variant={'caption'} color={'text.secondary'}>
                {secondary}
              </Typography>
            )}
          </Stack>
        )}
      </Stack>
    ),
    [hideImage, icon, image, name, props, secondary, variant],
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
