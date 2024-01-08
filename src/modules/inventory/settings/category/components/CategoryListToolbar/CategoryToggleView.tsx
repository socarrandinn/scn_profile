import { memo, useCallback, MouseEvent } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import { useSearchParamsChange } from '@dfl/react-security';
import { VIEW_TYPE } from 'modules/inventory/settings/category/constants';

const CategoryToggleView = () => {
  const { value, update } = useSearchParamsChange('view')
  const view = value || VIEW_TYPE.tree;

  const handleViewChange = useCallback((event: MouseEvent<HTMLElement>,
    newAlignment: string | null,) => {
    update({ view: newAlignment })
  }, [update]);

  return (
        <ToggleButtonGroup
            value={view}
            size={'small'}
            color="primary"
            exclusive
            onChange={handleViewChange}
            aria-label="text alignment"
        >
            <ToggleButton value={VIEW_TYPE.tree} aria-label="tree view">
                <AccountTreeOutlinedIcon/>
            </ToggleButton>
            <ToggleButton value={VIEW_TYPE.flat} aria-label="flat view">
                <ReorderOutlinedIcon/>
            </ToggleButton>
        </ToggleButtonGroup>
  );
}

export default memo(CategoryToggleView);
