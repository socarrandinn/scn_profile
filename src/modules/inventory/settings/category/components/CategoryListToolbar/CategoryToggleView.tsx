import { memo, useCallback, MouseEvent } from 'react';
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import { useSearchParamsChange } from '@dfl/react-security';
import { VIEW_TYPE } from 'modules/inventory/settings/category/constants';
import { useTranslation } from 'react-i18next';

const CategoryToggleView = () => {
  const { value, update } = useSearchParamsChange('view');
  const { t } = useTranslation('common');

  const view = value || VIEW_TYPE.tree;

  const handleViewChange = useCallback(
    (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
      update({ view: newAlignment });
    },
    [update],
  );

  return (
    <ToggleButtonGroup
      value={view}
      size={'small'}
      color='primary'
      exclusive
      onChange={handleViewChange}
      aria-label='text alignment'
    >
      <ToggleButton value={VIEW_TYPE.tree} aria-label='tree view'>
        <Tooltip title={t('toggleView.treeView')}>
          <AccountTreeOutlinedIcon />
        </Tooltip>
      </ToggleButton>

      <ToggleButton value={VIEW_TYPE.flat} aria-label='flat view'>
        <Tooltip title={t('toggleView.listView')}>
          <ReorderOutlinedIcon />
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default memo(CategoryToggleView);
