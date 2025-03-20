import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindMessages } from 'modules/client/message/hooks/useFindMessages';
import { messageColumns } from 'modules/client/message/constants/message.columns';
import { MessageListToolbar } from 'modules/client/message/components/MessageListToolbar';
import MessageEditModal from 'modules/client/message/containers/MessageEditModal';

const MessageListContainer = () => {
  const { isLoading, error, data } = useFindMessages();
  return (
    <Box>
      <MessageListToolbar />
      <Table
        columns={messageColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <MessageEditModal />
    </Box>
  );
};

export default memo(MessageListContainer);
