import { EntityApiService } from '@dfl/react-security';
import { IDisallowedWord } from 'modules/crm/disallowed-word/interfaces';

class DisallowedWordService extends EntityApiService<IDisallowedWord> {}

export default new DisallowedWordService('disallowed-word');
