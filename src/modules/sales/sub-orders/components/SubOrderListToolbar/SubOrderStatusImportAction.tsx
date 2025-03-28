import { useToggle } from '@dfl/hook-utils';
import { AddButton } from '@dfl/mui-admin-layout';
import { UploadFile } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import OrderImportStatusModal from '../../containers/OrderImportStatusModal';

const SubOrderStatusImportAction = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation('subOrder');
  return (
    <>
      <AddButton variant='outlined' startIcon={<UploadFile />} action={onOpen}>
        {t('action.statusImport')}
      </AddButton>
      <OrderImportStatusModal
        title='statusImport.title'
        subtitle='statusImport.subtitle'
        open={isOpen}
        onClose={onClose}
        initValue={{
          file: null,
        }}
      />
    </>
  );
};

export default SubOrderStatusImportAction;
