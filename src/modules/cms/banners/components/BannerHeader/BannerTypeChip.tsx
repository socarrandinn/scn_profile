import { Chip } from '@mui/material';
import {
  COLLECTION_BANNER_TYPE,
  COLLECTION_BANNER_TYPE_COLOR,
} from 'modules/cms/collections/constants/collection-types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const BannerTypeChip = ({ subType }: { subType?: COLLECTION_BANNER_TYPE }) => {
  const { t } = useTranslation('collection');

  const bgColor = useMemo(
    () => COLLECTION_BANNER_TYPE_COLOR[subType ?? COLLECTION_BANNER_TYPE.SIMPLE_BANNER],
    [subType],
  );
  if (!subType) return null;
  return (
    <Chip
      sx={{ backgroundColor: bgColor, color: '#fff' }}
      label={t(`subType.${subType ?? COLLECTION_BANNER_TYPE.SIMPLE_BANNER}`)}
    />
  );
};
