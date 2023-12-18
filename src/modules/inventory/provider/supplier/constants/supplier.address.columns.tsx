import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import Typography from '@mui/material/Typography';
import { ISupplierAddressList } from '../interfaces';
import TranslateLabel from 'modules/common/components/TranslateLabel/TranslateLabel';

export const labelColumn: HeadCell<ISupplierAddressList> = {
  field: 'label',
  align: CellAlign.LEFT,
  renderCell: (label: string) => (
    <Typography fontWeight={600}>
      <TranslateLabel label={label || ''} locale='provider' />
    </Typography>
  ),
};
export const valueColumn: HeadCell<ISupplierAddressList> = {
  field: 'value',
  align: CellAlign.LEFT,
  renderCell: (value: string) => <Typography>{value || ''}</Typography>,
};

export const addressColumns: Array<HeadCell<any>> = [labelColumn, valueColumn];
