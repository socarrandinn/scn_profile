import { memo } from 'react';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

const OfferEmptyItem = () => {
  const { t } = useTranslation('offer');
  return (
    <Stack flexDirection={'row'} gap={2} alignItems={'center'} justifyContent={'center'}>
      <ListAltOutlinedIcon />
      {t('offer:emptyList')}
    </Stack>
  );
};

export default memo(OfferEmptyItem);
