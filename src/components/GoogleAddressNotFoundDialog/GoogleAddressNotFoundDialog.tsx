import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

type Props = {
  open: boolean;
  onClose: () => void;
};

const GoogleAddressNotFoundDialog = ({ open, onClose }: Props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation('common');

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={onClose} aria-labelledby='responsive-address-title'>
      <DialogTitle id='responsive-address-dialog'>{t('fields.address.title')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t('messages.addressNotFound')}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          {t('close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GoogleAddressNotFoundDialog;
