import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

const ProductStockListEmpty = () => {
  const { t } = useTranslation('product');
  return (
    <Stack direction={'row'} gap={1}>
      <ListAltOutlinedIcon />
      <Typography variant='h1' color='initial'>
        {t('emptyProductList')}
      </Typography>
    </Stack>
  );
};

export default memo(ProductStockListEmpty);
