import { memo } from 'react';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExportingState from 'components/ExportInformationAlert/ExportingState';

type DialogDownloadProps = {
  isOpen: boolean;
  onClose: any;
  error: any;
};

const DialogDownload = ({ isOpen, onClose, error }: DialogDownloadProps) => {
  return (
    <Dialog
      maxWidth={'sm'}
      fullWidth
      open={isOpen}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle>
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <ExportingState error={error} />
    </Dialog>
  );
};

export default memo(DialogDownload);
