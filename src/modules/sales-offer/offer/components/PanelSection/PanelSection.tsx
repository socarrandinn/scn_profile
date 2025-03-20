import { memo, ReactNode } from 'react';
import { Paper, Stack, styled, Typography } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

export const SectionPaper = styled(Paper)(({ theme }) => ({
  padding: 16,
  [theme.breakpoints.down('md')]: {
    padding: 8,
  },
  marginBottom: 16,
}));

type Props = {
  title: ReactNode;
  titleMb?: number;
  actions?: any;
};

const PanelSection = ({ title, titleMb = 2, children, actions }: ChildrenProps & Props) => {
  return (
    <SectionPaper>
      <Stack sx={{ marginBottom: titleMb }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
        {actions}
      </Stack>
      {children}
    </SectionPaper>
  );
};

export default memo(PanelSection);
