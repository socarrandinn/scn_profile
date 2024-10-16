import { memo, useEffect, useState } from 'react';
import { useFilterStore } from '../context/filtersStore';
import { Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { Filter } from '@dfl/mui-admin-layout';
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
  const excludeFilterKey = useFilterStore((state) => state.excludeFiltersKey);
  const update = useFilterStore((state) => state.updateExcludeFilter);

  const [isExclude, setIsExclude] = useState(false);

  useEffect(() => {
    setIsExclude(excludeFilterKey.includes(filter?.key));
  }, [excludeFilterKey, filter?.key]);

  const [searchParams] = useSearchParams();
  const _keyFilter = searchParams.get(filter?.key);

  return (
    <FormControlLabel
      disabled={_keyFilter !== null}
      control={
        <Checkbox
          checked={!isExclude}
          onChange={() => {
            update(filter?.key);
          }}
        />
      }
      label={t(filter.filter)}
    />
  );
};

const ExcludeFilterActions = () => {
  const { t } = useTranslation('common');
  const clearFilterStore = useFilterStore((state) => state.clearStore);

  return (
    <Button
      onClick={() => {
        clearFilterStore();
      }}
      startIcon={<FilterAltOutlined />}
      variant='outlined'
    >
      {t('clear')}
    </Button>
  );
};
