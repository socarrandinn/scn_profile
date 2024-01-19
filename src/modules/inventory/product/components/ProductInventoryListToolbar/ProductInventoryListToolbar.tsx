import { memo } from 'react';
import { Typography } from '@mui/material';
import { FlexBox, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import AviableProductCreateModal from 'modules/inventory/product/containers/ProductTabs/AviableProductCreateModal';
import { useToggle } from '@dfl/hook-utils';
import { Add } from '@mui/icons-material/';

const ProductInventoryListToolbar = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onOpen } = useToggle();

  return (
    <>
      <Typography variant='h6' marginBottom={2}>
        {' '}
        {t('section.inventory.title')}
      </Typography>
      <FlexBox my={2} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='h6'> {t('section.inventory.total')}: </Typography>
        <LoadingButton startIcon={<Add />} onClick={onOpen} color='success' variant='contained'>
          {t('section.inventory.add')}
        </LoadingButton>
      </FlexBox>
      <AviableProductCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ProductInventoryListToolbar);
