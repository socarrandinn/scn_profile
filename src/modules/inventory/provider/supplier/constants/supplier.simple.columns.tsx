import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import Typography from '@mui/material/Typography';
import { ISupplierAddressList } from '../interfaces';
import TranslateLabel from 'modules/common/components/TranslateLabel/TranslateLabel';
import { grey } from '@mui/material/colors';

export const labelColumn: HeadCell<ISupplierAddressList> = {
  field: 'label',
  align: CellAlign.LEFT,
  renderCell: (label: string) => (
    <Typography color={grey[700]}>
      <TranslateLabel label={label || ''} locale='provider' />
    </Typography>
  ),
};

export const valueColumn: HeadCell<ISupplierAddressList> = {
  field: 'value',
  align: CellAlign.LEFT,
  renderCell: (value: string) => <Typography>{value || ''}</Typography>,
};

export const simpleColumns: Array<HeadCell<any>> = [labelColumn, valueColumn];
