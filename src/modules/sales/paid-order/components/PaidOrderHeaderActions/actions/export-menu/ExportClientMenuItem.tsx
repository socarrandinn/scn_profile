import { DescriptionOutlined } from '@mui/icons-material';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
// todo - definir export de la orden
const ExportClientMenuItem = ({ order, onClose }: { order: IOrder; onClose: () => void }) => {
  const { t } = useTranslation('order');
  // const { exportOrder } = useExportOneOrder();
  const handleExportClient = useCallback(() => {
    // exportOrder(order?._id, true, order);
    onClose();
  }, [onClose]);

  return (
    <MenuItem onClick={handleExportClient}>
      <ListItemIcon>
        <DescriptionOutlined fontSize='small' />
      </ListItemIcon>
      <ListItemText>{t('header.actions.export.exportClientInvoice')}</ListItemText>
    </MenuItem>
  );
};

export default memo(ExportClientMenuItem);
