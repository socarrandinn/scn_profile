import { Chip } from '@mui/material';
import {
  COLLECTION_BANNER_TYPE,
  COLLECTION_BANNER_TYPE_COLOR,
} from 'modules/cms/collections/constants/collection-types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const CollectionBannerTypeChip = ({ type, isButton }: { type?: COLLECTION_BANNER_TYPE; isButton?: boolean }) => {
  const { t } = useTranslation('collection');

  const bgColor = useMemo(() => COLLECTION_BANNER_TYPE_COLOR[type ?? COLLECTION_BANNER_TYPE.SIMPLE_BANNER], [type]);
  if (!type) return null;
  return (
    <Chip
      sx={{ backgroundColor: bgColor, color: '#fff', ...(isButton && { borderRadius: '4px', minHeight: 36 }) }}
      label={t(`type.${type ?? COLLECTION_BANNER_TYPE.SIMPLE_BANNER}`)}
    />
  );
};
