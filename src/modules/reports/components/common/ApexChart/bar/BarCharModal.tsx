import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import Scrollbars from 'react-custom-scrollbars-2';
import DialogClosed from 'components/libs/dialog/DialogClosed';

type Props = {
  options: any;
  series: any;
  onClose: () => void;
  open: boolean;
  title: string;
  height: number;
};

const BarCharModal = ({ series, options, open, height, onClose, title }: Props) => {
  const content = useMemo(() => {
    return <Chart options={options} series={series} type='bar' width='100%' height={height} />;
  }, [options, series, height]);

  const { t } = useTranslation('common');
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      fullWidth
      maxWidth='md'
    >
      <DialogTitle id='alert-dialog-title' sx={{ position: 'relative' }}>
        <DialogClosed onClose={onClose} />
        {t(title)}
      </DialogTitle>
      <Scrollbars autoHide={false} allowFullScreen autoHeight autoHeightMin={300} autoHeightMax={600}>
        <DialogContent sx={{ mt: 2 }}>{content}</DialogContent>
      </Scrollbars>
      <DialogActions>
        <Button variant='grey' onClick={onClose}>
          {t('cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(BarCharModal);
