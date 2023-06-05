import { memo, useMemo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import PageLayout from 'layouts/PageLayouts/PageLayout';

type CenterPageLayoutProps = ChildrenProps & {
  top?: boolean;
  maxWidth?: number;
};

const sx: any = {
  margin: '24px auto 0',
  width: '100%',
  maxWidth: '1445px',
};

const CenterPageLayout = ({ children, top, maxWidth }: CenterPageLayoutProps) => {
  const style = useMemo(() => {
    let customSx = sx;
    if (maxWidth) {
      customSx = { ...customSx, maxWidth: `${maxWidth}px` };
    }
    if (top) {
      customSx = { ...customSx, paddingTop: '64px' };
    }
    return customSx;
  }, [top, maxWidth]);

  return <PageLayout sx={style}>{children}</PageLayout>;
};

export default memo(CenterPageLayout);
