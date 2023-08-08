import { memo } from 'react';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import ManufactureDetailC from 'modules/store/provider/manufacture/components/ManufactureDetail/ManufactureDetailC';

const ManufactureSummary = () => {
  return (
        <Stack
            direction={'column'}
            divider={<Divider orientation='horizontal' light />}
            spacing={0}
            sx={{ paddingBottom: 1, marginTop: 2 }}
        >
           <ManufactureDetailC />
        </Stack>
  )
}

export default memo(ManufactureSummary);
