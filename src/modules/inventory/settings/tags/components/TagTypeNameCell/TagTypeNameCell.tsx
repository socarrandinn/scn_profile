import { Chip } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type TagTypeNameCellProps = {
  type: string;
  size?: 'small' | 'medium';
};

const TagTypeNameCell = ({ type, size = 'medium' }: TagTypeNameCellProps) => {
  const { t } = useTranslation('tags');
  return <Chip size={size} variant='outlined' label={t(`TAG_TYPE.${type}`)} />;
};

export default memo(TagTypeNameCell);
