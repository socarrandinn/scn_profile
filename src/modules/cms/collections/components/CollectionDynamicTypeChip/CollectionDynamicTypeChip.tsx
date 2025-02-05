import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { COLLECTION_DYNAMIC_MAP } from '../../constants/collection-status';
import { DYNAMIC_COLLECTION_TYPE } from '../../constants/collection-types';

export const CollectionDynamicTypeChip = ({ type }: { type: DYNAMIC_COLLECTION_TYPE }) => {
  const { t } = useTranslation('collection');

  const status = COLLECTION_DYNAMIC_MAP.get(!(type === DYNAMIC_COLLECTION_TYPE.CUSTOM));

  if (!status) return null;
  return (
    <Chip
      sx={{ backgroundColor: status.color, color: '#fff', borderRadius: '4px', minHeight: 36 }}
      label={t(status.title)}
    />
  );
};
