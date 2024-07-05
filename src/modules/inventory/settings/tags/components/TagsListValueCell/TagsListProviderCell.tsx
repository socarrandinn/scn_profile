import { memo, useMemo } from 'react';
import { TagList } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type TagsListProviderCellProps = {
  tags: string[];
};

const TagsListProviderCell = ({ tags }: TagsListProviderCellProps) => {
  const { t } = useTranslation('tags');
  const list = useMemo(() => tags?.map((tag) => t(`TAG_PROVIDER.${tag}`)), [tags]);
  return <TagList value={list} limit={5} />;
};

export default memo(TagsListProviderCell);
