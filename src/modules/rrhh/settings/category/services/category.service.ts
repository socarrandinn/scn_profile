import { EntityApiService } from '@dfl/react-security';
import { ICategory } from 'modules/rrhh/settings/category/interfaces';

class CategoryService extends EntityApiService<ICategory> {}

export default new CategoryService('/ms-rrhh/api/categories');
