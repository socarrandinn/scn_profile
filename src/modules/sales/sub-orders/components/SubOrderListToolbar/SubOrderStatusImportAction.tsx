import { useToggle } from '@dfl/hook-utils';
import { AddButton } from '@dfl/mui-admin-layout';
import { UploadFile } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import ProductWarehouseImportStockCreateModal from 'modules/inventory/product-stock/containers/ProductWarehouseImportStockCreateModal';

const SubOrderStatusImportAction = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation('subOrder');
  return (
    <>
      <AddButton variant='outlined' startIcon={<UploadFile />} action={onOpen}>
        {t('action.statusImport')}
      </AddButton>
      <ProductWarehouseImportStockCreateModal
        title='warehouse.import.title'
        subtitle='warehouse.import.subtitle'
        open={isOpen}
        onClose={onClose}
        initValue={{
          warehouse: 'objectid',
          file: null,
        }}
      />
    </>
  );
};

export default SubOrderStatusImportAction;
