import { Drop, Thumbnail, ThumbnailWrapper } from './styled';
import { Box, IconButton } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { TYPE_DROP } from './FileDropZone';
import { TransTypography } from 'components/TransTypography';
import UploadIcon from 'modules/inventory/product-stock/components/Icons/UploadIcon';

type RequestServiceDropClickProps = {
  open: () => void;
  type?: TYPE_DROP;
};

export const RequestServiceDropClick = ({ open, type }: RequestServiceDropClickProps) => {
  return (
    <ThumbnailWrapper onClick={open} elevation={0}>
      <Thumbnail isDrop variant='square'>
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
        <TransTypography variant='body2' message={title || 'dropZone:titleFile'} />
      </Drop>
    );
  }

  return (
    <Drop>
      <IconButton size='large' disableTouchRipple disableRipple>
        <FileDownloadOutlinedIcon />
      </IconButton>
      <TransTypography variant='body2' message='dropZone:titleFile' />
    </Drop>
  );
};
