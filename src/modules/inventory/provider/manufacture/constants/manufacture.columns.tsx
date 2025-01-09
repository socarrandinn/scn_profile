import { ManufactureRowActions } from 'modules/inventory/provider/manufacture/components/ManufactureRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IManufacture } from 'modules/inventory/provider/manufacture/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { MANUFACTURE_PERMISSIONS } from 'modules/inventory/provider/manufacture/constants/manufacture.permissions';
import { ManufactureCell } from 'modules/inventory/provider/manufacture/components/ManufactureCell';
import ManufactureStatePicker from 'modules/inventory/provider/manufacture/components/ManufactureStatePicker/ManufactureState';
import { ManufactureBand } from 'modules/inventory/provider/manufacture/components/ManufactureBand';
import { categoryNameColumn, createdAtProductColumn, productCodeColumn, productCostPriceColumn, productNameColumn, productPriceColumn, visibleProductColumn } from 'modules/inventory/product/constants';

export const manufactureNameColumn: HeadCell<IManufacture> = {
  field: 'name',
  headerName: 'manufacture:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IManufacture) => (
    <ManufactureCell manufactured={data._id as string} name={data.name} image={data.avatar} />
  ),
};

export const manufactureStateColumn: HeadCell<IManufacture> = {
  field: 'state',
  headerName: 'manufacture:fields.state',
  align: CellAlign.CENTER,
  component: ManufactureStatePicker,
};

export const manufactureBandColumn: HeadCell<IManufacture> = {
  field: 'band',
  headerName: 'manufacture:fields.band',
  renderCell: (_, data: IManufacture) => <ManufactureBand bands={data.brand} />,
};

export const manufactureActionsColumn: HeadCell<IManufacture> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: MANUFACTURE_PERMISSIONS.MANUFACTURE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ManufactureRowActions,
};

export const manufactureColumns: Array<HeadCell<any>> = [
  manufactureNameColumn,
  manufactureBandColumn,
  manufactureStateColumn,
  createdATColumn,
  manufactureActionsColumn,
];

export const manufacturerProductColumns: Array<HeadCell<any>> = [
  productNameColumn,
  productCodeColumn,
  visibleProductColumn,
  productCostPriceColumn,
  productPriceColumn,
  categoryNameColumn,
  createdAtProductColumn,
];
