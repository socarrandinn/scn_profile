import { createContext, memo, ReactNode, useContext, useEffect, useState } from 'react';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import PageLayout from 'layouts/PageLayouts/PageLayout';
import { Paper, styled, Typography } from '@mui/material';

type PagePaperLayoutProps = ChildrenProps & {
  title?: string;
  nPadding?: boolean;
  generalAction?: ReactNode;
};

export const nPaddingSx = {};
export const sx = {
  padding: {
    xs: 1,
    sm: 2,
    xl: 4,
  },
  paddingTop: {
    xs: 1,
    sm: 2,
    xl: 3,
  },
};

const titleSx = {};

export const GeneralActions = styled('div')(() => ({
  display: 'flex',
  gap: 14,
  flexWrap: 'wrap',
}));

interface ActionPortalContext {
  render: boolean;
}

export const ActionPortal = createContext<ActionPortalContext>({
  render: false,
}); // component props type

const PagePaperLayout = ({ children, title, nPadding }: PagePaperLayoutProps) => {
  const [render, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <PageLayout>
      <Paper sx={nPadding ? nPaddingSx : sx}>
        <FlexBox justifyContent={'space-between'} alignItems={'center'} gap={2} flexWrap={'wrap'}>
          <Typography variant={'h1'} sx={titleSx}>
            {title}
          </Typography>
          <GeneralActions id={'page-general-actions'}></GeneralActions>
        </FlexBox>
        <ActionPortal.Provider
          value={{
            render,
          }}
        >
          {children}
        </ActionPortal.Provider>
      </Paper>
    </PageLayout>
  );
};

export const useGeneralActionPortal = () => {
  const context = useContext(ActionPortal);

  if (!context) {
    throw new Error('You need to be inside PagePaperLayout to use "GeneralActions"');
  }

  return context.render;
};

export default memo(PagePaperLayout);
