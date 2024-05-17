import { EntityApiService } from '@dfl/react-security';
import { IStaticSiteMapItem } from 'modules/cms/seo/static-site-map-item/interfaces';

class StaticSiteMapItemService extends EntityApiService<IStaticSiteMapItem> {}

export default new StaticSiteMapItemService('/ms-cms/api/seo/static-site-map-item');
