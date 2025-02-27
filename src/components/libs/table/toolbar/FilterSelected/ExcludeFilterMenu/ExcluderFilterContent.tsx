import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useFilterStore } from '../context/filtersStore';
import { Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { Filter, useTable } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import { FilterAltOutlined } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';
import ExcludeFilterSearch from './ExcludeFilterSearch';
import Scrollbars from 'react-custom-scrollbars-2';

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
        width: 340,
      }}
    >
      <ExcludeFilterSearch {...{ searchTerm, setSearchTerm }} />

      <Scrollbars autoHeight autoHeightMax={280}>
        <Stack>
          {filteredFilters.map((filter) => (
            <ExcludeFilterItemCheckbox key={filter?.key} filter={filter} />
          ))}
        </Stack>
      </Scrollbars>

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
    if (id) {
      const _exclude = excludeFiltersMap[id]?.includes(filter?.key) || false;
      setIsExclude(_exclude);
    }
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
  const resetFilterStore = useFilterStore((state) => state.reset);
  const defaultFilter = useFilterStore((state) => state.defaultFilterKeys);
  const [searchParams, setSearchParams] = useSearchParams();

  const clearFilter = useCallback(() => {
    if (searchParams) {
      setSearchParams({});
    }
    resetFilterStore(id);
  }, [searchParams, resetFilterStore, id, setSearchParams]);

  return (
    <Stack gap={1} flexDirection={'row'} width={'100%'} justifyContent={'end'}>
      <Button
        size='small'
        onClick={() => {
          clearFilterStore(id);
        }}
        startIcon={<FilterAltOutlined />}
        variant='contained'
      >
        {t('allFilter')}
      </Button>
      {defaultFilter?.length > 0 && (
        <Button
          size='small'
          onClick={() => {
            clearFilter();
          }}
          variant='outlined'
        >
          {t('reset')}
        </Button>
      )}
    </Stack>
  );
};
