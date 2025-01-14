import { BannerRowActions } from 'modules/cms/banners/components/BannerRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IBanner } from 'modules/cms/banners/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { BANNER_PERMISSIONS } from 'modules/cms/banners/constants/banner.permissions';

export const bannerNameColumn: HeadCell<IBanner> = {
  field: 'name',
  headerName: 'banner:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IBanner) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const bannerDescriptionColumn: HeadCell<IBanner> = {
  field: 'description',
  headerName: 'banner:fields.description',
};

export const bannerActionsColumn: HeadCell<IBanner> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: BANNER_PERMISSIONS.BANNER_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: BannerRowActions,
};

export const bannerColumns: Array<HeadCell<any>> = [
  bannerNameColumn,
  bannerDescriptionColumn,
  createdATColumn,
  bannerActionsColumn
];
