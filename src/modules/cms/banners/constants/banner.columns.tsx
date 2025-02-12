import { BannerRowActions } from 'modules/cms/banners/components/BannerRowActions';
import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IBanner } from 'modules/cms/banners/interfaces';
import { BANNER_PERMISSIONS } from 'modules/cms/banners/constants/banner.permissions';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { IImageMedia } from 'modules/common/interfaces';
import { LongText } from '@dfl/mui-react-common';
import BannerWithTextCell from '../components/BannerWithTextCell/BannerWithTextCell';

export const bannerNameColumn: HeadCell<IBanner> = {
  field: 'title',
  headerName: 'banner:fields.title',
  disablePadding: false,
  renderCell: (title: string, data?: IBanner) => (
    <AvatarNameCell link={`/cms/banners?edit=${data?._id as string}`} name={title} variant={'rounded'} hideImage />
  ),
};

export const bannerMobileColumn: HeadCell<IBanner> = {
  field: 'mobileImage',
  headerName: 'banner:fields.mobileImage',
  renderCell: (_: string, data?: IBanner) => (
    <AvatarNameCell hideLink variant={'rounded'} image={data?.mobileImage as IImageMedia} />
  ),
};
export const bannerDesktopColumn: HeadCell<IBanner> = {
  field: 'desktopImage',
  headerName: 'banner:fields.desktopImage',
  renderCell: (_: string, data?: IBanner) => (
    <AvatarNameCell hideLink variant={'rounded'} image={data?.desktopImage as IImageMedia} />
  ),
};

export const bannerDescriptionColumn: HeadCell<IBanner> = {
  field: 'description',
  headerName: 'banner:fields.description',
  renderCell: (description: string) => (
    <LongText lineClamp={2} text={description} sx={{ width: { xs: 280, md: 400 } }} />
  ),
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

export const startDateColumn: HeadCell<any> = {
  field: 'startDate',
  type: CellType.DATE,
  headerName: 'banner:fields.startDate',
};

export const endDateColumn: HeadCell<any> = {
  field: 'endDate',
  type: CellType.DATE,
  headerName: 'banner:fields.endDate',
};

export const withTextColumn: HeadCell<any> = {
  field: 'withText',
  align: CellAlign.CENTER,
  headerName: 'banner:fields.withText',
  component: BannerWithTextCell,
};

export const bannerColumns: Array<HeadCell<any>> = [
  bannerNameColumn,
  bannerMobileColumn,
  bannerDesktopColumn,
  // bannerDescriptionColumn,
  // withTextColumn,
  startDateColumn,
  endDateColumn,
  bannerActionsColumn,
];
