import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { DropDown } from '@dfl/mui-react-common';
import { FileDownloadOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { ExportClientMenuItem, ExportInvoiceMenuItem, ExportTicketMenuItem } from './export-menu';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';

type OrderExportMenuProps = {
  hazExportTicket: boolean;
  order: IOrder;
};

const OrderExportMenu = ({ hazExportTicket, order }: OrderExportMenuProps) => {
  const { t } = useTranslation('order');
  const { isOpen, onOpen, onClose } = useToggle();

  if (!order) return <></>;

  return (
    <>
      <DropDown
        label={t('common:export')}
        buttonProps={{
          variant: 'outlined',
          startIcon: <FileDownloadOutlined />,
        }}
        open={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <ExportClientMenuItem order={order} onClose={onClose} />

        {/* // todo - definir permiso */}
        <ExportInvoiceMenuItem order={order} onClose={onClose} />

        {hazExportTicket && <ExportTicketMenuItem order={order} />}
      </DropDown>
    </>
  );
};

export default memo(OrderExportMenu);
