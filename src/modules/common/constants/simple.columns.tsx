import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import Typography from '@mui/material/Typography';
import { IWarehouseAddressList } from 'modules/inventory/warehouse/interfaces';
import TranslateLabel from 'modules/common/components/TranslateLabel/TranslateLabel';
import { LABEL_COLUMN_WIDTH } from 'modules/common/constants/label.column.width';

export const labelColumn: HeadCell<IWarehouseAddressList> = {
  field: 'label',
  align: CellAlign.LEFT,
  width: LABEL_COLUMN_WIDTH,
  renderCell: (label: string) => <TranslateLabel label={label || ''} locale='provider' />,
};

export const valueColumn: HeadCell<IWarehouseAddressList> = {
  field: 'value',
  align: CellAlign.LEFT,
  renderCell: (value: string) => <Typography>{value || ''}</Typography>,
};

const secondLabelColumn = { ...labelColumn, field: 'label2' };
const secondValueColumn = { ...valueColumn, field: 'value2' };

export const simpleColumns: Array<HeadCell<any>> = [labelColumn, valueColumn];

export const doubleSimpleColumns: Array<HeadCell<any>> = [
  labelColumn,
  valueColumn,
  secondLabelColumn,
  secondValueColumn,
];
