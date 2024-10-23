import { useQuery } from '@tanstack/react-query';
import { DisallowedWordService } from 'modules/crm/settings/disallowed-word/services';
import { DISALLOWED_WORDS_ONE_KEY } from 'modules/crm/settings/disallowed-word/constants';
import { useCallback } from 'react';
import { IDisallowedWord } from 'modules/crm/settings/disallowed-word/interfaces';

export const useFindOneDisallowedWord = (id: string | null) => {
  const fetch = useCallback(() => DisallowedWordService.getOne(id as string), [id]);
  return useQuery<IDisallowedWord>([id, DISALLOWED_WORDS_ONE_KEY], fetch, { enabled: !!id });
};
