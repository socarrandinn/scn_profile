import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { DisallowedWordService } from 'modules/crm/settings/disallowed-word/services';
import { DISALLOWED_WORDS_LIST_KEY } from 'modules/crm/settings/disallowed-word/constants';

export const useFindDisallowedWords = () => {
  const { fetch, queryKey } = useTableRequest(DisallowedWordService.search);

  return useQuery([DISALLOWED_WORDS_LIST_KEY, queryKey], fetch);
};
