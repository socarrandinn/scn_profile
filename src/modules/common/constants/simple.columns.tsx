import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IWarehouseAddressList } from 'modules/inventory/warehouse/interfaces';
import TranslateLabel from 'modules/common/components/TranslateLabel/TranslateLabel';
import { Box } from '@mui/material';

export const labelColumn: HeadCell<IWarehouseAddressList> = {
  field: 'label',
  align: CellAlign.LEFT,
  width: '25%',
  resizable: true,
  renderCell: (label: string) => <TranslateLabel label={label || ''} locale='provider' />,
};

export const valueColumn: HeadCell<IWarehouseAddressList> = {
  field: 'value',
  align: CellAlign.LEFT,
  renderCell: (value: any) => <Box fontWeight={600}>{value || ''}</Box>,
};

export const secondLabelColumn: HeadCell<IWarehouseAddressList> = {
  field: 'label',
  align: CellAlign.LEFT,
  width: '25%',
  resizable: true,
  renderCell: (label: string) => <TranslateLabel label={label || ''} locale='provider' />,
};

export const secondValueColumn: HeadCell<IWarehouseAddressList> = {
  field: 'value',
  align: CellAlign.LEFT,
  width: '25%',
  renderCell: (value: any) => <Box fontWeight={600}>{value || ''}</Box>,
};

const secondLabelColumn2 = { ...labelColumn, field: 'label2' };
const secondValueColumn2 = { ...valueColumn, field: 'value2' };

export const simpleColumns: Array<HeadCell<any>> = [{ ...labelColumn, width: '50%' }, valueColumn];

export const doubleSimpleColumns: Array<HeadCell<any>> = [
  secondLabelColumn,
  secondValueColumn,
  secondLabelColumn2,
  secondValueColumn2,
];
