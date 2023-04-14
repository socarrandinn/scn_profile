// @ts-nocheck
import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { ChildrenProps } from '@dfl/mui-react-common';
import { Navbar } from '@dfl/mui-admin-layout';
import { CenterPageLayout } from 'layouts';
import { Paper } from '@mui/material';

const AnonymousLayout = ({ children }: ChildrenProps) => {
  const { onOpen } = useToggle(false);

  return (
    <>
      <Navbar onOpenSidebar={onOpen} sx={{}} />
      <CenterPageLayout top>
        <Paper sx={{ padding: 4 }}>
          <div>{children}</div>
        </Paper>
      </CenterPageLayout>
    </>
  );
};

export default memo(AnonymousLayout);
