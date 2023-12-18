import { memo } from 'react';
import { Skeleton, Stack } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';

const SupplierGeneralAddressSkeleton = () => {
  return (
    <FormPaper title=''>
      <Stack>
        {Array(5)
          .fill('')
          .map((sk) => (
            <Stack key={sk} flexDirection={'row'} gap={2}>
              <Skeleton variant='text' sx={{ width: { xs: '100%', md: '30%' } }} />
              <Skeleton variant='text' sx={{ width: { xs: '100%', md: '70%' } }} />
            </Stack>
          ))}
      </Stack>
    </FormPaper>
  );
};

export default memo(SupplierGeneralAddressSkeleton);
