import { useEffect, useState } from 'react';
import PageLayout from 'layouts/PageLayouts/PageLayout';
import { Box, Paper } from '@mui/material';
import { RouterTab, TabRouteType } from '@dfl/react-security';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import { ActionPortal, GeneralActions } from './PagePaperLayout';

type PageTabPaperLayoutProps = ChildrenProps & {
  prefix: string;
  tabs: TabRouteType[];
};

const PageTabPaperLayout = ({ children, prefix, tabs }: PageTabPaperLayoutProps) => {
  const [render, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <PageLayout mb={3}>
      <Paper>
        <Box pt={1}>
          <FlexBox
            sx={{ borderBottom: 1, borderColor: 'divider', paddingX: { xs: 0, md: 2 } }}
            justifyContent={'space-between'}
          >
            <RouterTab
              tabs={tabs}
              prefix={prefix}
              variant={tabs?.length > 1 ? 'scrollable' : 'fullWidth'}
              scrollButtons='auto'
            />
            <div>
              <GeneralActions id={'page-general-actions'}></GeneralActions>
            </div>
          </FlexBox>
          <ActionPortal.Provider
            value={{
              render,
            }}
          >
            <Box sx={{ padding: { xs: 2, md: 4 }, paddingTop: { xs: 2, md: 3 } }}>{children}</Box>
          </ActionPortal.Provider>
        </Box>
      </Paper>
    </PageLayout>
  );
};

export default PageTabPaperLayout;
