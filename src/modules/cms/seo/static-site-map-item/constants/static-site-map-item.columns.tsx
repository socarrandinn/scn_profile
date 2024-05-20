import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IStaticSiteMapItem } from 'modules/cms/seo/static-site-map-item/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';

export const staticSiteMapItemNameColumn: HeadCell<IStaticSiteMapItem> = {
  field: 'name',
  headerName: 'staticSiteMapItem:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IStaticSiteMapItem) => <EditLink entityId={data._id as string}>{name}</EditLink>,
};

export const staticSiteMapItemDescriptionColumn: HeadCell<IStaticSiteMapItem> = {
  field: 'description',
  headerName: 'staticSiteMapItem:fields.description',
};

export const staticSiteMapItemColumns: Array<HeadCell<any>> = [
  staticSiteMapItemNameColumn,
  staticSiteMapItemDescriptionColumn,
  createdATColumn,
];
