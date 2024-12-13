import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindTags } from 'modules/inventory/settings/tags/hooks/useFindTags';
import { tagsColumns } from 'modules/inventory/settings/tags/constants/tags.columns';
import { TagsListToolbar } from 'modules/inventory/settings/tags/components/TagsListToolbar';
import TagsEditModal from 'modules/inventory/settings/tags/containers/TagsEditModal';

const TagsListContainer = () => {
  const { isLoading, error, data } = useFindTags();
  return (
    <Box>
      <TagsListToolbar />
      <Table
        columns={tagsColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
      />
      <TagsEditModal />
    </Box>
  );
};

export default memo(TagsListContainer);
