import { StaticSiteMapItemRowActions } from 'modules/cms/seo/static-site-map-item/components/StaticSiteMapItemRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IStaticSiteMapItem } from 'modules/cms/seo/static-site-map-item/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { STATIC_SITE_MAP_ITEM_PERMISSIONS } from 'modules/cms/seo/static-site-map-item/constants/static-site-map-item.permissions';

export const staticSiteMapItemNameColumn: HeadCell<IStaticSiteMapItem> = {
  field: 'name',
  headerName: 'staticSiteMapItem:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IStaticSiteMapItem) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const staticSiteMapItemDescriptionColumn: HeadCell<IStaticSiteMapItem> = {
  field: 'description',
  headerName: 'staticSiteMapItem:fields.description',
};

export const staticSiteMapItemActionsColumn: HeadCell<IStaticSiteMapItem> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: STATIC_SITE_MAP_ITEM_PERMISSIONS.STATIC_SITE_MAP_ITEM_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: StaticSiteMapItemRowActions,
};

export const staticSiteMapItemColumns: Array<HeadCell<any>> = [
  staticSiteMapItemNameColumn,
  staticSiteMapItemDescriptionColumn,
  createdATColumn,
  staticSiteMapItemActionsColumn
];
