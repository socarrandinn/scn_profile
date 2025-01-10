import { IconButton, Stack, StackProps } from '@mui/material';
import DeleteIcon from 'components/icons/DeleteIcon';
import { EditIcon } from 'components/icons/EditIcon';
import ImageIcon from 'components/libs/Icons/ImageIcon';
import { TransTypography } from 'components/TransTypography';
import { memo } from 'react';

type MultiBannerItemProps = {
  iconSize?: string;
  imageSize: string;
  title: string;
  sx: StackProps['sx'];
};

const MultiBannerItem = ({ iconSize, imageSize, title, sx }: MultiBannerItemProps) => {
  return (
    <Stack
      sx={{
        ...sx,
        borderRadius: '10px',
        border: '1px dashed #C1C2C2;',
        backgroundColor: '#EDEEF0',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <ImageIcon sx={{ fontSize: iconSize ?? '50px' }} />
      <TransTypography textAlign={'center'} variant='body2' message={title} values={{ imageSize }} />
      <ItemAction onDelete={() => {}} onEdit={() => {}} />
    </Stack>
  );
};

export default memo(MultiBannerItem);

type Props = {
  onDelete: VoidFunction;
  onEdit: VoidFunction;
};
const ItemAction = ({ onDelete, onEdit }: Props) => {
  return (
    <Stack
      flexDirection={'row'}
      gap={1}
      sx={{
        position: 'absolute',
        top: '10px',
        right: '10px',
      }}
    >
      <IconButton
        onClick={onEdit}
        size='small'
        sx={{
          opacity: 0.8,
          color: '#fff',
          backgroundColor: 'primary.main',
          ':hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        <EditIcon fontSize='small' />
      </IconButton>
      <IconButton
        sx={{
          opacity: 0.8,
          color: '#fff',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.dark',
          },
        }}
        onClick={onDelete}
        size='small'
      >
        <DeleteIcon fontSize='small' />
      </IconButton>
    </Stack>
  );
};
