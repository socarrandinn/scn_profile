import { StockReductionCauseRowActions } from 'modules/inventory/settings/stock-reduction-cause/components/StockReductionCauseRowActions';
import { CellAlign, EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { STOCK_REDUCTION_CAUSE_PERMISSIONS } from 'modules/inventory/settings/stock-reduction-cause/constants/stock-reduction-cause.permissions';
import { BooleanCell } from 'modules/common/components/BooleanCell';

export const stockReductionCauseNameColumn: HeadCell<IStockReductionCause> = {
  field: 'name',
  headerName: 'stockReductionCause:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IStockReductionCause) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const stockReductionCauseDescriptionColumn: HeadCell<IStockReductionCause> = {
  field: 'description',
  headerName: 'stockReductionCause:fields.description',
};

export const stockReductionCauseResponsibleColumn: HeadCell<IStockReductionCause> = {
  field: 'requiresResponsible',
  headerName: 'stockReductionCause:fields.requiresResponsible',
  align: CellAlign.CENTER,
  component: BooleanCell,
};

export const stockReductionCauseEvidenceColumn: HeadCell<IStockReductionCause> = {
  field: 'requiresEvidence',
  headerName: 'stockReductionCause:fields.requiresEvidence',
  component: BooleanCell,
  align: CellAlign.CENTER,
};

export const stockReductionCauseActionsColumn: HeadCell<IStockReductionCause> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: STOCK_REDUCTION_CAUSE_PERMISSIONS.STOCK_REDUCTION_CAUSE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: StockReductionCauseRowActions,
};

export const stockReductionCauseColumns: Array<HeadCell<any>> = [
  stockReductionCauseNameColumn,
  stockReductionCauseDescriptionColumn,
  stockReductionCauseResponsibleColumn,
  stockReductionCauseEvidenceColumn,
  createdATColumn,
  stockReductionCauseActionsColumn
];
