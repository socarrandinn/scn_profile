import { Button, DialogActions, DialogTitle, Divider } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = DialogProps & {
  onClose: any;
  open: boolean;
  title: string | ReactNode;
  className?: string;
};

const SimpleDialog = ({ children, onClose, open, title, className, ...rest }: Props) => {
  const { t } = useTranslation('common');

  return (
    <Dialog open={open} {...rest}>
      <DialogTitle sx={{ pt: 0, pb: 1 }}>{title}</DialogTitle>
      <Divider />
      {children}
      <DialogActions>
        <Button onClick={onClose} variant='contained'>
          {t('close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(SimpleDialog);
