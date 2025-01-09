import { EntityApiService } from '@dfl/react-security';
import { ITestimony } from 'modules/cms/testimony/interfaces';

class TestimonyService extends EntityApiService<ITestimony> {}

export default new TestimonyService('/ms-cms/api/testimony');
