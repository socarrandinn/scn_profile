import { memo } from 'react';
import { Update } from '@mui/icons-material/';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@dfl/mui-react-common';
import { useToggle } from '@dfl/hook-utils';
import AviableProductEditModal from 'modules/inventory/product/containers/ProductTabs/AviableProductEditModal';

type UserStatusProps = {
  rowId: string;
};

const ProductInventoryStoreUpdateButton = ({ rowId }: UserStatusProps) => {
  const { t } = useTranslation('product');
  const { isOpen, onOpen, onClose } = useToggle();
  return (
    <>
      <LoadingButton variant='outlined' startIcon={<Update />} onClick={onOpen}>
        {t('section.inventory.update')}
      </LoadingButton>
      <AviableProductEditModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ProductInventoryStoreUpdateButton);
