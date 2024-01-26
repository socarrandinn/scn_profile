import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import Typography from '@mui/material/Typography';
import { IStoreAddressList } from 'modules/inventory/store/interfaces';
import TranslateLabel from 'modules/common/components/TranslateLabel/TranslateLabel';
import { grey } from '@mui/material/colors';

export const labelColumn: HeadCell<IStoreAddressList> = {
  field: 'label',
  align: CellAlign.LEFT,
  width: 450,
  renderCell: (label: string) => (
    <Typography color={grey[700]}>
      <TranslateLabel label={label || ''} locale='provider' />
    </Typography>
  ),
};

export const valueColumn: HeadCell<IStoreAddressList> = {
  field: 'value',
  align: CellAlign.LEFT,
  renderCell: (value: string) => <Typography>{value || ''}</Typography>,
};

export const simpleColumns: Array<HeadCell<any>> = [labelColumn, valueColumn];
