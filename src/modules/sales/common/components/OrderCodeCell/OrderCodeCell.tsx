import { ReactLink } from '@dfl/react-security';
import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
type OrderCodeCellProps = {
  link: string;
  value: string;
};

const OrderCodeCell = ({ link, value }: OrderCodeCellProps) => {
  return (
    <Stack maxWidth={300} alignItems={'center'}>
      <ReactLink to={link} underline={'hover'}>
        <Typography noWrap lineHeight={1} title={value}>
          {value}
        </Typography>
      </ReactLink>
    </Stack>
  );
};

export default memo(OrderCodeCell);
