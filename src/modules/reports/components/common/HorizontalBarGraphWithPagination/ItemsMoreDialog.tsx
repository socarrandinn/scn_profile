import { memo } from 'react';
import { Dialog, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ListStaticLogisticsHome from './ItemsList';

type ItemsMoreDialogProps = {
  open: boolean;
  handleClose: any;
  data: any;
  isLoading?: boolean;
  isPrice?: boolean;
  MIN: number;
  MAX: number;
  title?: string | null;
  color?: 'inherit' | 'info' | 'primary' | 'secondary' | 'error' | 'success' | 'warning';
};

const ItemsMoreDialog = ({
  open,
  handleClose,
  data,
  isLoading,
  MIN,
  MAX,
  title,
  color,
  ...props
}: ItemsMoreDialogProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      maxWidth={'xl'}
    >
      <DialogTitle sx={{ fontWeight: '300px', fontSize: '18px' }} id='alert-dialog-title'>
        {title}
      </DialogTitle>
      <IconButton
        aria-label='close'
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ width: !isMobile ? '560px' : '262px' }}>
        <ListStaticLogisticsHome
          {...props}
          data={data || []}
          isLoadingTable={isLoading}
          isSlice={false}
          MIN={MIN}
          MAX={MAX}
          color={color}
        />
      </DialogContent>
    </Dialog>
  );
};

export default memo(ItemsMoreDialog);
