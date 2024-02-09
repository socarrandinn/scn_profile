import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import Typography from '@mui/material/Typography';
import { IStoreAddressList } from 'modules/inventory/store/interfaces';
import TranslateLabel from 'modules/common/components/TranslateLabel/TranslateLabel';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/material';

export const labelColumn: HeadCell<IStoreAddressList> = {
  field: 'label',
  align: CellAlign.LEFT,
  width: 150,
  maxWidth: 150,
  renderCell: (label: string) => (
    <Typography color={grey[700]}>
      <TranslateLabel label={label || ''} locale='provider' />
    </Typography>
  ),
};

export const valueColumn: HeadCell<IStoreAddressList> = {
  field: 'value',
  align: CellAlign.LEFT,
  maxWidth: 100,
  renderCell: (value: string) => (
    <Box maxWidth={'150px'}>
      <Typography>{value || ''}</Typography>
    </Box>
  ),
};

export const organizationSimpleColumns: Array<HeadCell<any>> = [labelColumn, valueColumn];
