import { memo, useMemo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import PageLayout from 'layouts/PageLayouts/PageLayout';

type CenterPageLayout1000Props = ChildrenProps & {
  top?: boolean;
  maxWidth?: string;
};

const sx = {
  margin: '24px auto 0',
  width: '100%',
  maxWidth: '1000px',
};

const CenterPageLayout1000 = ({ children, top }: CenterPageLayout1000Props) => {
  const style = useMemo(() => {
    if (top) return { ...sx, paddingTop: '64px' };
    return sx;
  }, [top]);

  return <PageLayout sx={style}>{children}</PageLayout>;
};

export default memo(CenterPageLayout1000);
