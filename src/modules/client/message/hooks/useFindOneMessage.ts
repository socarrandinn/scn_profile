import { useQuery } from '@tanstack/react-query';
import { MessageService } from 'modules/client/message/services';
import { MESSAGES_ONE_KEY } from 'modules/client/message/constants';
import { useCallback } from 'react';
import { IMessage } from 'modules/client/message/interfaces';

export const useFindOneMessage = (id: string | null) => {
  const fetch = useCallback(() => MessageService.getOne(id as string), [id]);
  return useQuery<IMessage>([id, MESSAGES_ONE_KEY], fetch, { enabled: !!id });
};
