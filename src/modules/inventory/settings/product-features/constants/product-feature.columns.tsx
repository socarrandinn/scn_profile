import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { IProductFeature } from '../interfaces/IProductFeature';
import { ProductFeatureRowActions } from '../components/ProductFeatureRowActions';
import { PRODUCT_FEATURE_PERMISSIONS } from './product-feature.permissions';
import { ProductFeatureTypeNameCell } from '../components/ProductFeatureTypeNameCell';

import ProductFeatureTagList from '../components/ProductFeatureTagList/ProductFeatureTagList';

export const productFeatureNameColumn: HeadCell<IProductFeature> = {
  field: 'name',
  headerName: 'productFeatures:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IProductFeature) => <EditLink entityId={data?._id as string}>{name}</EditLink>,
};

export const productFeatureTypeColumn: HeadCell<IProductFeature> = {
  field: 'type',
  headerName: 'productFeatures:fields.type',
  renderCell: (type: string) => <ProductFeatureTypeNameCell type={type} />,
};

export const productFeatureValueColumn: HeadCell<IProductFeature> = {
  field: 'values',
  headerName: 'productFeatures:fields.values',
  component: ProductFeatureTagList,
};

export const productFeatureActionsColumn: HeadCell<IProductFeature> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: PRODUCT_FEATURE_PERMISSIONS.WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ProductFeatureRowActions,
};

export const productFeatureColumns: Array<HeadCell<any>> = [
  productFeatureNameColumn,
  productFeatureTypeColumn,
  productFeatureValueColumn,
  createdATColumn,
  productFeatureActionsColumn,
];
