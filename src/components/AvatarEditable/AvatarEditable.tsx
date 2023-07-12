import { memo } from 'react'
import {
  Button,
  ButtonProps, CircularProgress
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { styled } from '@mui/material/styles';
import { IImageMedia } from 'modules/common/interfaces';
import { ChildrenProps, imageUrl } from '@dfl/mui-react-common';
import { AvatarMedia } from 'components/AvatarMedia';
import PersonIcon from '@mui/icons-material/Person';
// This button is needed so "component='label'" can be set for the styled component ImageButton.
// This way the whole overlay works as an input and is clickable.

const ImageInputButton = (props: ButtonProps<'label'>) => {
  return <Button {...props} component="label"/>;
};

// start of styling for logo and overlay
const ImageButton = styled(ImageInputButton)(({ theme }) => ({
  position: 'relative',

  height: 150,
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.4,
    },
    '& .MuiImageMarked-root': {
      opacity: 0.8,
    },
  },
  '.MuiSvgIcon-root': {
    fontSize: 50,
  },
  '.MuiCircularProgress-root': {
    position: 'absolute',
    // top: '0px',
    left: '0px',
  },
}));

// styling for image/logo/profilepicture
const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
});

// styling for opacity effect
const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}));

// styling for overlay logo (here the cameraIcon)
const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opactiy: 0,
  color: theme.palette.common.white,
}));
// end of styling

export type AvatarEditableProps = ChildrenProps & {
  avatar?: IImageMedia,
  onSubmit: any,
  size?: number,
  isLoading?: boolean,
  readOnly?: boolean,
  variant?: 'circular' | 'rounded' | 'square',
}

const AvatarEditable = ({ avatar, size = 150, onSubmit, isLoading, readOnly, children, variant }: AvatarEditableProps) => {
  const hasImage = !!avatar?.url;
  const image: string = imageUrl(avatar?.url || '');
  return (
        <AvatarMedia
            variant={variant}
            sx={{
              height: size,
              width: size,
            }}
            hd
        >
            <ImageButton
                focusRipple
                key={'random'}
                style={{
                  width: '100%',
                }}
            >
                {hasImage
                  ? <ImageSrc style={{ backgroundImage: `url(${image})` }}/>
                  : children || <PersonIcon/>
                }
                {(!isLoading && !readOnly) && <><ImageBackdrop className='MuiImageBackdrop-root'/>
                    <Image>
                        <CameraAltIcon
                            className='MuiImageMarked-root'
                            fontSize='large'
                            sx={{
                              color: 'white',
                              opacity: 0,
                            }}
                        />
                    </Image>
                    <input type='file' accept='image/*' hidden onChange={(e) => onSubmit?.(e.target.files)}/>
                </>
                }
                {isLoading && <CircularProgress size={size} thickness={1}/>}
            </ImageButton>
        </AvatarMedia>
  );
}

export default memo(AvatarEditable);
