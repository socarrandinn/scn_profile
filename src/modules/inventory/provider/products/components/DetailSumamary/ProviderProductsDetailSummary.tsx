import { memo } from 'react';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import ProProductsDetailGeneral
  from 'modules/inventory/provider/products/components/DetailsGeneral/ProductsDetail';
const ProviderProductsDetailSummary = () => {
  return (
    <Stack
      direction={'column'}
      divider={<Divider orientation='horizontal' light />}
      spacing={0}
      sx={{ paddingBottom: 1, marginTop: 1 }}
    >
      <ProProductsDetailGeneral/>
    </Stack>
  )
}

export default memo(ProviderProductsDetailSummary);
