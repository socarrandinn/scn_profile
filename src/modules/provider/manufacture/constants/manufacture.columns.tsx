import { ManufactureRowActions } from 'modules/provider/manufacture/components/ManufactureRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IManufacture } from 'modules/provider/manufacture/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { MANUFACTURE_PERMISSIONS } from 'modules/provider/manufacture/constants/manufacture.permissions';

export const manufactureNameColumn: HeadCell<IManufacture> = {
  field: 'name',
  headerName: 'manufacture:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IManufacture) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const manufactureDescriptionColumn: HeadCell<IManufacture> = {
  field: 'description',
  headerName: 'manufacture:fields.description',
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
  manufactureDescriptionColumn,
  createdATColumn,
  manufactureActionsColumn
];
