import { memo, useEffect, useMemo, useState } from 'react';
import { useFilterStore } from '../context/filtersStore';
import { Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { Filter, useTable } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import { FilterAltOutlined } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';

const ExcluderFilterContent = () => {
  const _filters = useFilterStore((state) => state.filters);

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
      <Stack sx={{ maxHeight: 300, width: 250, overflowY: 'auto' }}>
        {_filters.map((filter) => (
          <ExcludeFilterItemCheckbox key={filter?.key} filter={filter} />
        ))}
      </Stack>
      <ExcludeFilterActions />
    </Stack>
  );
};

export default memo(ExcluderFilterContent);

const ExcludeFilterItemCheckbox = ({ filter }: { filter: Filter }) => {
  const { t } = useTranslation();
  const { id } = useTable();
  const _key = useMemo(() => `${id}:${filter?.key}`, [id, filter?.key]);

  const excludeFilterKey = useFilterStore((state) => state.excludeFiltersKey);
  const update = useFilterStore((state) => state.updateExcludeFilter);
  const [isExclude, setIsExclude] = useState(false);

  useEffect(() => {
    setIsExclude(excludeFilterKey.includes(_key));
  }, [_key, excludeFilterKey]);

  const [searchParams] = useSearchParams();
  const _keyFilter = searchParams.get(filter?.key);

  return (
    <FormControlLabel
      disabled={_keyFilter !== null}
      control={
        <Checkbox
          checked={!isExclude}
          onChange={() => {
            update(_key);
          }}
        />
      }
      label={t(filter.filter)}
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
