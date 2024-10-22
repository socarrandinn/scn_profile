import { useToggle } from '@dfl/hook-utils';
import { Description } from '@mui/icons-material';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { ExportInformationAlert } from 'components/ExportInformationAlert';
import { useExportTicketSelected } from 'modules/sales/common/hooks/useExportSelected';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { useExportSubOrderTicket } from 'modules/sales/sub-orders/hooks/useExportSubOrders';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ExportTicketMenuItem = ({ order }: { order: IOrder }) => {
  const { t } = useTranslation('order');
  const { isOpen, onOpen, onClose } = useToggle();
  const { wFilters: wTicketFilters } = useExportTicketSelected({}, [order?._id]);

  const {
    mutate: handleExportTicket,
    isLoading: isExportingTicket,
    error: errorExportTicket,
    reset: resetExportTicket,
  } = useExportSubOrderTicket(wTicketFilters, onClose);

  return (
    <>
      <MenuItem onClick={onOpen}>
        <ListItemIcon>
          <Description fontSize='small' />
        </ListItemIcon>
        <ListItemText>{t('header.actions.export.exportInvoice')}</ListItemText>
      </MenuItem>
      <ExportInformationAlert
        error={errorExportTicket}
        isOpen={isOpen}
        onExport={handleExportTicket}
        onClose={onClose}
        reset={resetExportTicket}
        isExporting={isExportingTicket}
        total={undefined}
        confirmation={'common:exportDialog.confirmation'}
      />
    </>
  );
};

export default memo(ExportTicketMenuItem);
