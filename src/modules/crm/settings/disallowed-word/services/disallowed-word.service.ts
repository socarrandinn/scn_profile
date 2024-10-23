import { EntityApiService } from '@dfl/react-security';
import { IDisallowedWord } from 'modules/crm/settings/disallowed-word/interfaces';

class DisallowedWordService extends EntityApiService<IDisallowedWord> {}

export default new DisallowedWordService('/ms-inventory/api/disallowed-words');
