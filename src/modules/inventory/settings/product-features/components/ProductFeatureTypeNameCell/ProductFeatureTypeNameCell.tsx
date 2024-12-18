import { Chip } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type ProductFeatureTypeNameCellProps = {
  type: string;
  size?: 'small' | 'medium';
};

const ProductFeatureTypeNameCell = ({ type, size = 'medium' }: ProductFeatureTypeNameCellProps) => {
  const { t } = useTranslation('productFeatures');
  return <Chip size={size} variant='outlined' label={t(`FEATURE_TYPE.${type}`)} />;
};

export default memo(ProductFeatureTypeNameCell);
