import { useToggle } from '@dfl/hook-utils';
import { AddButton } from '@dfl/mui-admin-layout';
import { UploadFile } from '@mui/icons-material';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { useTranslation } from 'react-i18next';
import ProductWarehouseImportStockCreateModal from '../../containers/ProductWarehouseImportStockCreateModal';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

const StockWarehouseImportAction = () => {
  const { warehouseId } = useWarehouseDetail();
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation('stock');
  return (
    <>
      <AddButton variant='outlined' startIcon={<UploadFile />} action={onOpen}>
        {t('productImport')}
      </AddButton>
      <ProductWarehouseImportStockCreateModal
        title='warehouse.import.title'
        subtitle='warehouse.import.subtitle'
        open={isOpen}
        onClose={onClose}
        initValue={{
          warehouse: warehouseId as unknown as IWarehouse,
          file: null,
        }}
      />
    </>
  );
};

export default StockWarehouseImportAction;
