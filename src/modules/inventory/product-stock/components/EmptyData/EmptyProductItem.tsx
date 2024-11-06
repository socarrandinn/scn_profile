import { memo } from 'react';
import EmptyListIcon from './EmptyListIcon';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';

const EmptyProductItem = () => {
  const { t } = useTranslation('stock');
  return (
    <Stack
      gap={1}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'row'}
      sx={(theme) => ({
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        width: '100%',
        py: 1,
      })}
    >
      <EmptyListIcon />
      <Typography>{t('emptyItemList')}</Typography>
    </Stack>
  );
};

export default memo(EmptyProductItem);
