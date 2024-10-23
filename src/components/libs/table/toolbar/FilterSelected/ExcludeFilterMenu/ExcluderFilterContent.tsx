import { memo, useEffect, useMemo, useState } from 'react';
import { useFilterStore } from '../context/filtersStore';
import { Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { Filter, useTable } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import { FilterAltOutlined } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';
import ExcludeFilterSearch from './ExcludeFilterSearch';

const ExcluderFilterContent = () => {
  const _filters = useFilterStore((state) => state.filters);
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();

  const _translateFilter = useMemo(() => _filters?.map((f) => ({ ...f, filter: t(f.filter) })), [_filters, t]);

  const filteredFilters = _translateFilter.filter((filter) =>
    filter.filter.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Stack
      flex={1}
      gap={2}
      sx={{
        padding: {
          xs: 1,
          md: 2,
        },
      }}
    >
      <ExcludeFilterSearch {...{ searchTerm, setSearchTerm }} />

      <Stack sx={{ maxHeight: 320, width: 280, overflowY: 'auto' }}>
        {filteredFilters.map((filter) => (
          <ExcludeFilterItemCheckbox key={filter?.key} filter={filter} />
        ))}
      </Stack>

      <ExcludeFilterActions />
    </Stack>
  );
};

export default memo(ExcluderFilterContent);

const ExcludeFilterItemCheckbox = ({ filter }: { filter: Filter }) => {
  const { id } = useTable();

  const excludeFiltersMap = useFilterStore((state) => state.excludeFiltersMap);
  const update = useFilterStore((state) => state.updateExcludeFilter);
  const [isExclude, setIsExclude] = useState(false);

  useEffect(() => {
    const _exclude = excludeFiltersMap[id]?.includes(filter?.key) || false;
    setIsExclude(_exclude);
  }, [filter?.key, excludeFiltersMap, id]);

  const [searchParams] = useSearchParams();
  const _keyFilter = searchParams.get(filter?.key);

  return (
    <FormControlLabel
      disabled={_keyFilter !== null}
      control={
        <Checkbox
          checked={!isExclude}
          onChange={() => {
            update(filter?.key, id);
          }}
        />
      }
      label={filter.filter}
    />
  );
};

const ExcludeFilterActions = () => {
  const { t } = useTranslation('common');
  const { id } = useTable();
  const clearFilterStore = useFilterStore((state) => state.clearStore);

  return (
    <Button
      onClick={() => {
        clearFilterStore(id);
      }}
      startIcon={<FilterAltOutlined />}
      variant='outlined'
    >
      {t('clear')}
    </Button>
  );
};
