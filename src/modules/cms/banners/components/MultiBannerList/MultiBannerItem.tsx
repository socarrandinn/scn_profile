import { imageUrl } from '@dfl/mui-react-common';
import { IconButton, Stack, StackProps } from '@mui/material';
import DeleteIcon from 'components/icons/DeleteIcon';
import { EditIcon } from 'components/icons/EditIcon';
import ImageIcon from 'components/libs/Icons/ImageIcon';
import { TransTypography } from 'components/TransTypography';
import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import { memo, useMemo } from 'react';

type MultiBannerItemProps = {
  iconSize?: string;
  imageSize: string;
  title: string;
  sx: StackProps['sx'];
  media?: IMedia | null;
  onOpen: VoidFunction;
  onRemove?: VoidFunction;
};

const MultiBannerItem = ({ iconSize, imageSize, title, sx, onOpen, onRemove, media }: MultiBannerItemProps) => {
  const _banner = useMemo(() => media && imageUrl(media?.url ?? ''), [media]);

  return (
    <Stack
      sx={(theme) => ({
        ...sx,

        borderRadius: '10px',
        border: (theme) => `2px dashed ${theme.palette.grey[50]}`,
        ...(_banner && {
          backgroundImage: `url('${_banner}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }),
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.grey[200],
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        ':hover': {
          cursor: 'pointer',
          border: (theme) => `2px dashed ${theme.palette.primary.main} `,
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[300],
        },
        ':active': {
          cursor: 'pointer',
          border: (theme) => `2px dashed ${theme.palette.primary.main} `,
        },
      })}
      onClick={onOpen}
    >
      <Stack
        sx={{
          backgroundColor: (theme) => `${theme.palette.background.default}75`,
          borderRadius: '10px',
          p: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ImageIcon sx={{ fontSize: iconSize ?? '50px' }} />
        <TransTypography textAlign={'center'} variant='body2' message={title} values={{ imageSize }} />

        {onRemove && media && <ItemAction onRemove={onRemove} onEdit={onOpen} />}
      </Stack>
    </Stack>
  );
};

export default memo(MultiBannerItem);

type Props = {
  onRemove: VoidFunction;
  onEdit: VoidFunction;
};
const ItemAction = ({ onRemove, onEdit }: Props) => {
  return (
    <Stack
      flexDirection={'row'}
      gap={1}
      sx={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'background.default',
        p: 1,
        borderRadius: '10px',
        opacity: 0.8,
        zIndex: 10,
      }}
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          onEdit();
        }}
        size='small'
        sx={{
          fontSize: 12,
          opacity: 0.8,
          color: '#fff',
          backgroundColor: 'primary.main',
          ':hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        <EditIcon fontSize='inherit' />
      </IconButton>
      <IconButton
        sx={{
          fontSize: 12,
          opacity: 0.8,
          color: '#fff',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.dark',
          },
        }}
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        size='small'
      >
        <DeleteIcon fontSize='inherit' />
      </IconButton>
    </Stack>
  );
};
