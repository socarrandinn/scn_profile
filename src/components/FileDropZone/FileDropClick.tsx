import { Drop, Thumbnail, ThumbnailWrapper } from './styled';
import { Box, IconButton } from '@mui/material';
import { TYPE_DROP } from './FileDropZone';
import { TransTypography } from 'components/TransTypography';
import UploadIcon from 'modules/inventory/product-stock/components/Icons/UploadIcon';
import ImageIcon from 'components/libs/Icons/ImageIcon';

type RequestServiceDropClickProps = {
  open: () => void;
  type?: TYPE_DROP;
};

export const RequestServiceDropClick = ({ open, type }: RequestServiceDropClickProps) => {
  return (
    <ThumbnailWrapper onClick={open} elevation={0}>
      <Thumbnail variant='square'>
        <DropTitle type={type} />
      </Thumbnail>
    </ThumbnailWrapper>
  );
};

export const FileDropClick = ({ open, type }: RequestServiceDropClickProps) => {
  return (
    <Box sx={{ cursor: 'pointer' }} pt={1} onClick={open}>
      <DropTitle type={type} />
    </Box>
  );
};

type DropTitleProps = {
  type?: TYPE_DROP;
  title?: string;
};
export const DropTitle = ({ type, title }: DropTitleProps) => {
  if (type === TYPE_DROP.FILE) {
    return (
      <Drop>
        <IconButton size='medium' disableTouchRipple disableRipple>
          <UploadIcon />
        </IconButton>
        <TransTypography textAlign={'center'} variant='body2' message={title || 'dropZone:titleFile'} />
      </Drop>
    );
  }

  return (
    <Drop
      sx={{
        flexDirection: 'column',
        border: '2px dashed',
        borderRadius: '10px',
        height: '100%',
        width: '100%',
      }}
    >
      <IconButton size='large' disableTouchRipple disableRipple>
        <ImageIcon sx={{ fontSize: '30px', color: 'primary.main' }} />
      </IconButton>
      <TransTypography textAlign={'center'} variant='body2' message='dropZone:titleFile' />
    </Drop>
  );
};
