import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import MessageListContainer from 'modules/client/message/containers/MessageListContainer';
import { messageFilters } from 'modules/client/message/constants/message.filters';

const MessageList = () => {
  const { t } = useTranslation('message');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'messages'} filters={messageFilters}>
        <MessageListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(MessageList);
