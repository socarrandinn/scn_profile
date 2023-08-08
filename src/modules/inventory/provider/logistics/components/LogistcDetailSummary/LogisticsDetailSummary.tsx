import { memo } from 'react';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import LogisticsDetailGeneral from 'modules/inventory/provider/logistics/components/LogisticDetailsGeneral/LogisticsDetail';
const LogisticsDetailSummary = () => {
  return (
    <Stack
      direction={'column'}
      divider={<Divider orientation='horizontal' light />}
      spacing={0}
      sx={{ paddingBottom: 1, marginTop: 1 }}
    >
      <LogisticsDetailGeneral/>
    </Stack>
  )
}

export default memo(LogisticsDetailSummary);
