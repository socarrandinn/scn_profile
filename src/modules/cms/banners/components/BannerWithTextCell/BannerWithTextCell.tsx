import { Box } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
type Props = {
  value: boolean;
};

const BannerWithTextCell = ({ value = false }: Props) => {
  const { t } = useTranslation('banner');
  return <Box sx={{ fontWeight: 'medium' }}>{t(`withText.${value.toString()}`)}</Box>;
};

export default memo(BannerWithTextCell);
