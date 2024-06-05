import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindDisallowedWords } from 'modules/crm/disallowed-word/hooks/useFindDisallowedWords';
import { disallowedWordColumns } from 'modules/crm/disallowed-word/constants/disallowed-word.columns';
import { DisallowedWordListToolbar } from 'modules/crm/disallowed-word/components/DisallowedWordListToolbar';
import DisallowedWordEditModal from 'modules/crm/disallowed-word/containers/DisallowedWordEditModal';

const DisallowedWordListContainer = () => {
  const { isLoading, error, data } = useFindDisallowedWords();
  return (
    <Box>
      <DisallowedWordListToolbar />
      <Table
        columns={disallowedWordColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <DisallowedWordEditModal />
    </Box>
  );
};

export default memo(DisallowedWordListContainer);
