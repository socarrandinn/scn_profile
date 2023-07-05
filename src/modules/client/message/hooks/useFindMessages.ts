import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { MessageService } from 'modules/client/message/services';
import { MESSAGES_LIST_KEY } from 'modules/client/message/constants';

export const useFindMessages = () => {
  const { fetch, queryKey } = useTableRequest(MessageService.search);

  return useQuery([MESSAGES_LIST_KEY, queryKey], fetch);
};
