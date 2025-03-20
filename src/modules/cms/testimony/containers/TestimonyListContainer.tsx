import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindTestimonies } from 'modules/cms/testimony/hooks/useFindTestimonies';
import { testimonyColumns } from 'modules/cms/testimony/constants/testimony.columns';
import { TestimonyListToolbar } from 'modules/cms/testimony/components/TestimonyListToolbar';
import TestimonyEditModal from 'modules/cms/testimony/containers/TestimonyEditModal';

const TestimonyListContainer = () => {
  const { isLoading, error, data } = useFindTestimonies();
  return (
    <Box>
      <TestimonyListToolbar />
      <Table columns={testimonyColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} />
      <TestimonyEditModal />
    </Box>
  );
};

export default memo(TestimonyListContainer);
