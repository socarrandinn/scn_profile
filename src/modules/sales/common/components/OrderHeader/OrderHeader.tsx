import { ChildrenProps } from '@dfl/mui-react-common';
import { Box, Stack, Typography } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import { memo, ReactNode, useMemo } from 'react';

type OrderHeaderProps = ChildrenProps & {
  title: ReactNode | string;
  subtitle: ReactNode;
  status: ReactNode;
  actions?: ReactNode;
};

const OrderHeader = ({ status, subtitle, title, actions, children }: OrderHeaderProps) => {
  const _title = useMemo(
    () => (typeof title === 'string' ? <Typography variant='h1'>{title}</Typography> : title),
    [title],
  );
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
        <Stack gap={2} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
          <Box>
            {_title}
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
