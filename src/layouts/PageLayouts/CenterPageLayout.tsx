import { memo, useMemo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import PageLayout from 'layouts/PageLayouts/PageLayout';

type CenterPageLayoutProps = ChildrenProps & {
  top?: boolean;
};

const sx = {
  margin: '24px auto 0',
  width: '100%',
  maxWidth: '1445px',
};

const CenterPageLayout = ({ children, top }: CenterPageLayoutProps) => {
  const style = useMemo(() => {
    if (top) {
      return { ...sx, paddingTop: '64px' };
    }
    return sx;
  }, [top]);

  return <PageLayout sx={style}>{children}</PageLayout>;
};

export default memo(CenterPageLayout);
