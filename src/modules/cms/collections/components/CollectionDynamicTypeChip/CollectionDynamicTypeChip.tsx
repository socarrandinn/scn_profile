import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { COLLECTION_DYNAMIC_MAP } from '../../constants/collection-status';

export const CollectionDynamicTypeChip = ({ isDynamic }: { isDynamic: boolean }) => {
  const { t } = useTranslation('collection');

  const status = COLLECTION_DYNAMIC_MAP.get(isDynamic);

  if (!status) return null;
  return (
    <Chip
      sx={{ backgroundColor: status.color, color: '#fff', borderRadius: '4px', minHeight: 36 }}
      label={t(status.title)}
    />
  );
};
