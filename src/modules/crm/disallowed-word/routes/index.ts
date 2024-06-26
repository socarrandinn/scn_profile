import { DisallowedWordList } from 'modules/crm/disallowed-word/pages';
import { RouteConfig } from '@dfl/react-security';
import { DISALLOWED_WORD_PERMISSIONS } from 'modules/crm/disallowed-word/constants/disallowed-word.permissions';

const routes: RouteConfig = {
  DisallowedWordList: {
    path: '/',
    permissions: DISALLOWED_WORD_PERMISSIONS.DISALLOWED_WORD_VIEW,
    component: DisallowedWordList,
  },
};

export default routes;
