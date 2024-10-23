import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindDisallowedWords } from 'modules/crm/settings/disallowed-word/hooks/useFindDisallowedWords';
import { disallowedWordColumns } from 'modules/crm/settings/disallowed-word/constants/disallowed-word.columns';
import { DisallowedWordListToolbar } from 'modules/crm/settings/disallowed-word/components/DisallowedWordListToolbar';
import DisallowedWordEditModal from 'modules/crm/settings/disallowed-word/containers/DisallowedWordEditModal';

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
      />
      <DisallowedWordEditModal />
    </Box>
  );
};

export default memo(DisallowedWordListContainer);
