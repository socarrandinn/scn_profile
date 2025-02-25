import { useToggle } from '@dfl/hook-utils';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';
import { useDeleteMedia } from '../../hooks/useDeleteMedia';
import { ReactNode, useMemo } from 'react';
import { IMedia } from '../../interfaces/IMedia';
import { Box, Checkbox, Stack } from '@mui/material';
import { DeleteRowAction } from '@dfl/mui-admin-layout';

type Props = {
  media: IMedia;
  DeleteAction?: ReactNode;
};
const MediaActions = ({ media, DeleteAction }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { view, media: mediaMap, toggleMedia, actions } = useCollectionBannerContext();
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
        {DeleteAction || (
          <DeleteRowAction
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            error={error}
            isLoading={isLoading}
            onDelete={mutate}
          />
        )}
      </Box>
    </Stack>
  );
};

export default MediaActions;
