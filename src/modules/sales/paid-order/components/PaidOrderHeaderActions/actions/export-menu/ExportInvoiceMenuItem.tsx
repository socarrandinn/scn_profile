import { Description } from '@mui/icons-material';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

// todo - definir export de la orden
const ExportInvoiceMenuItem = ({ order, onClose }: { order: IOrder; onClose: () => void }) => {
  const { t } = useTranslation('order');
  // const { exportOrder } = useExportOneOrder();
  const handleExportInvoice = useCallback(() => {
    // exportOrder(order?._id, true, order);
    onClose();
  }, [onClose]);

  return (
    <MenuItem onClick={handleExportInvoice}>
      <ListItemIcon>
        <Description fontSize='small' />
      </ListItemIcon>
      <ListItemText>{t('header.actions.export.exportInvoice')}</ListItemText>
    </MenuItem>
  );
};

export default memo(ExportInvoiceMenuItem);
