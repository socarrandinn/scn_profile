import { Chip } from '@mui/material';
import {
  COLLECTION_CONTENT_TYPE,
  DYNAMIC_COLLECTION_TYPE_COLORS,
} from 'modules/cms/collections/constants/collection-types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ICollection } from '../../interfaces';

type Props = {
  record: ICollection;
  isButton?: boolean;
};

export const CollectionTypeStatusChip = ({ record, isButton }: Props) => {
  const { t } = useTranslation('collection');

  const bgColor = useMemo(
    () => DYNAMIC_COLLECTION_TYPE_COLORS[record?.settings?.type as keyof typeof DYNAMIC_COLLECTION_TYPE_COLORS],
    [record?.settings?.type],
  );
  if (!record?.settings?.type) return null;
  if (![COLLECTION_CONTENT_TYPE.CATEGORY, COLLECTION_CONTENT_TYPE.PRODUCT].includes(record?.contentType as any)) {
    return null;
  }

  return (
    <Chip
      sx={{ backgroundColor: bgColor, color: '#fff', ...(isButton && { borderRadius: '4px', minHeight: 30 }) }}
      label={t(`dynamic.${record?.contentType}.${record?.settings?.type}`)}
    />
  );
};
