import { lazy } from 'react';

const loadDisallowedWordList = () => import('modules/crm/disallowed-word/pages/DisallowedWordList');
export const DisallowedWordList = lazy(loadDisallowedWordList);
