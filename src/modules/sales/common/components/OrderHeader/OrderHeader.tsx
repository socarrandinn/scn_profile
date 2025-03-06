import { ChildrenProps } from '@dfl/mui-react-common';
import { Box, Stack, Typography } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import { memo, ReactNode } from 'react';

type OrderHeaderProps = ChildrenProps & {
  title: string;
  subtitle: ReactNode;
  status: ReactNode;
  actions?: ReactNode;
};

const OrderHeader = ({ status, subtitle, title, actions, children }: OrderHeaderProps) => {
  return (
    <FormPaper sx={{ paddingBottom: '0 !important' }}>
      <Stack
        gap={2}
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Stack gap={1} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
          <Box>
            <Typography variant='h1'>{title}</Typography>
            {subtitle}
          </Box>
          {status}
        </Stack>
        {actions}
      </Stack>
      <Box sx={{ mt: 2 }}>{children}</Box>
    </FormPaper>
  );
};

export default memo(OrderHeader);
