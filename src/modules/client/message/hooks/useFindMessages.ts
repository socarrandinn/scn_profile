import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { MessageService } from 'modules/client/message/services';
import { MESSAGES_LIST_KEY } from 'modules/client/message/constants';
import { IMessage } from 'modules/client/message/interfaces';

export const useFindMessages = () => {
  const { fetch, queryKey } = useTableRequest(MessageService.search);

  return useQuery([MESSAGES_LIST_KEY, queryKey], fetch);

  // const Messages = {
  //   data: [
  //     {
  //       _id: '8f8fsks7djd7dsj',
  //       name: 'Pepe',
  //       email: 'pepe@mail.com',
  //       status: 'En proceso',
  //       subject: 'Sobre categoria',
  //       messsage: 'No puedo agregar una nueva categoria',
  //       assigned: 'User1',
  //       createdAt: new Date(),
  //       active: true,
  //     },
  //   ],

  //   total: 1
  // };

  // return { isLoading: false, data: Messages, error: false };
};
