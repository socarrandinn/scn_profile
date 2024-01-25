import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { memo } from 'react';
import { ViewList, ViewModule } from '@mui/icons-material';

type Props = {
  onChange: any;
  view: string;
};
const SummaryStoreHeader = ({ onChange, view }: Props) => {
  return (
    <Stack flexDirection={'row'} justifyContent={'end'} mb={2}>
      <ToggleButtonGroup
        sx={{ backgroundColor: 'background.paper' }}
        orientation='horizontal'
        value={view}
        exclusive
        onChange={onChange}
      >
        <ToggleButton value='list' aria-label='list'>
          <ViewList />
        </ToggleButton>
        <ToggleButton value='module' aria-label='module'>
          <ViewModule />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default memo(SummaryStoreHeader);
