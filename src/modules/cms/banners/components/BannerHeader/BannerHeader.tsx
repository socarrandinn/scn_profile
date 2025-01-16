import { memo, ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import { CollectionStatus } from '../../../collections/components/CollectionStatus';
import { useCollectionDetails } from '../../../collections/context/CollectionContext';

import { FormPaper } from 'modules/common/components/FormPaper';

import { BannerTypeChip } from './BannerTypeChip';

type Props = { actions: ReactNode; title: string; subtitle: ReactNode };
const BannerHeader = ({ actions, title, subtitle }: Props) => {
  return (
    <FormPaper nm>
      <Stack
        sx={{
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: 'space-between',
        }}
      >
        <Stack sx={{ flexDirection: 'column', gap: 1 }}>
          <Box>
            <Typography variant='h1' color='initial'>
              {title}
            </Typography>
            {subtitle}
          </Box>
          <BannerStatus />
        </Stack>
        {actions}
      </Stack>
    </FormPaper>
  );
};

export default memo(BannerHeader);

const BannerStatus = () => {
  const { collection } = useCollectionDetails();
  return (
    <Stack sx={{ gap: 1, flexDirection: 'row' }}>
      <BannerTypeChip subType={collection?.subType} />
      <CollectionStatus status={collection?.active || false} collectionId={collection?._id || ''} />
    </Stack>
  );
};
