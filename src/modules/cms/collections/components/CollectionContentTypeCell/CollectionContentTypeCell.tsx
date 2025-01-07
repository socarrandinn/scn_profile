import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';

type Props = {
  value: COLLECTION_CONTENT_TYPE;
  size?: 'small' | 'medium'
};

const COLOR: Record<string, 'default' | 'primary' | 'error' | 'success' | 'warning' | 'info' | 'secondary' | undefined> = {
  BANNER: 'primary',
  TESTIMONY: 'warning',
  PRODUCT: 'info',
  CATEGORY: 'secondary',
};

const CollectionContentTypeCell = ({ value, size = 'small' }: Props) => {
  const { t } = useTranslation('collection');

  if (!value) return null;

  return (
    <Chip
      label={value ? t(`contentType.${value}`) : t('common:unknown')}
      size={size}
      color={COLOR[value] || 'default'}
      sx={{ px: 0.8, py: '14px !important' }}
    />
  )
};

export default memo(CollectionContentTypeCell);
