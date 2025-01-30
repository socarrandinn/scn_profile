import { ImageNotSupportedOutlined } from '@mui/icons-material';
import { Avatar, Box, Stack, Checkbox } from '@mui/material';
import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import defaultMedia from 'assets/images/media/default.webp';
import { imageUrl, LongText } from '@dfl/mui-react-common';
import { useMemo } from 'react';
import { useBannerContext } from 'modules/cms/banners/context/useBannerContext';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteMedia } from 'modules/cms/medias/hooks/useDeleteMedia';
import { DeleteRowAction } from '@dfl/mui-admin-layout';

type Props = {
  media: IMedia;
};

const MediaItem = ({ media }: Props) => {
  const thumb = useMemo(() => {
    if (media?.thumb) return imageUrl(media?.thumb);
    return defaultMedia;
  }, [media?.thumb]);

  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        ':hover .overlay, :active .overlay, :focus-within .overlay': {
          opacity: 1,
        },
        ':hover .actions, :active .actions, :focus-within .actions': {
          display: 'flex',
        },
      }}
    >
      <CheckMedia media={media} />
      <Avatar
        variant='rounded'
        sx={(theme) => ({
          height: 156,
          borderRadius: '10px',
          width: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
          backgroundColor: theme.palette.background.default,
        })}
        src={thumb}
      >
        <ImageNotSupportedOutlined />
      </Avatar>

      {/* Overlay */}
      <Box
        className='overlay'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#101D304D', // Color oscuro transparente
          borderRadius: '10px',
          opacity: 0, // Oculto por defecto
          transition: 'opacity 0.3s ease', // Transición suave al hacer hover
          pointerEvents: 'none', // No interfiere con clics u otros eventos
          display: 'flex',
          alignItems: 'end',
          overflow: 'hidden',
        }}
      >
        <LongText
          sx={{
            m: 1,
            color: 'white',
            overflow: 'hidden',
            wordBreak: 'break-word',
          }}
          lineClamp={2}
          text={media?.originalName ?? ''}
        />
      </Box>
    </Box>
  );
};

const CheckMedia = ({ media }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { view, media: mediaMap, toggleMedia, actions } = useBannerContext();
  const { mutate, isLoading, error } = useDeleteMedia(media?._id, onClose);
  const currentImage = mediaMap[view];

  const isChecked = useMemo(() => currentImage?._id === media?._id, [currentImage?._id, media._id]);

  const handleChange = () => {
    toggleMedia(media);
  };

  return (
    <Stack
      className='actions'
      sx={{
        position: 'absolute',
        top: '4px',
        left: 0,
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        borderRadius: 1,
        pt: 1,
        px: 1.5,
        ...(isChecked
          ? { display: 'flex' }
          : {
              display: 'none',
            }),
      }}
    >
      {actions?.showCheckMedia ? (
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          sx={{
            padding: 0,
            '& .MuiSvgIcon-root': {
              fill: '#E2E4E7',
              fillWidth: 2,
            },
            '&.Mui-checked .MuiSvgIcon-root': {
              fill: (theme) => theme.palette.primary.main,
            },
          }}
        />
      ) : (
        <Box />
      )}

      <Box
        sx={{
          '& .MuiIconButton-root': {
            fontSize: 12,
            opacity: 0.8,
            backgroundColor: 'error.main',
            ':hover': {
              backgroundColor: 'error.dark',
            },
          },
          '& .MuiSvgIcon-root': {
            color: '#fff',
          },
        }}
      >
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
        />
      </Box>
    </Stack>
  );
};

export default MediaItem;
