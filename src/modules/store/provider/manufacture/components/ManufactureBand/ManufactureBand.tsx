import { memo } from 'react';
import { styled } from '@mui/material';
import { renderTagList } from '@dfl/mui-react-common';

const CellStyle = styled('div')(({ theme }) => ({
  '.MuiPaper-root': {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '63px',
    width: '32px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
}));

const ManufactureBand = ({ bands }: { bands: any[] }) => (
    <CellStyle>{renderTagList(bands, 3)}</CellStyle>
);
export default memo(ManufactureBand)
