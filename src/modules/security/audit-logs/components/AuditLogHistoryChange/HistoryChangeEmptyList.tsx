import { memo } from 'react';
import { Stack, Typography, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

const EmptyListStack = styled(Stack)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: '5px 0',
  margin: '10px 0',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const ProductStoresCategoryEmptyList = ({ props }: any) => {
  const { t } = useTranslation('auditLog');

  return (
    <EmptyListStack>
      <TableChartOutlinedIcon fontSize='medium' />
      <Typography>{t('translate.emptyList')}</Typography>
    </EmptyListStack>
  );
};

export default memo(ProductStoresCategoryEmptyList);
