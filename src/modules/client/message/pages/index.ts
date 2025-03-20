import { lazy } from 'react';

const loadMessageList = () => import('modules/client/message/pages/MessageList');
export const MessageList = lazy(loadMessageList);
