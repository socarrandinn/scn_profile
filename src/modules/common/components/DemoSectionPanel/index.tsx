import React, { memo, FC } from 'react';
import classnames from 'classnames';
import { Box } from '@mui/material';
import { ChildrenProps, H2 } from '@dfl/mui-react-common';

type Props = ChildrenProps & {
  className?: string;
  title?: string;
  description?: string;
};

const DemoSectionPanel: FC<Props> = ({ className, title, description, children }) => {
  return (
    <Box className={classnames('relative', className)}>
      {(title || description) && (
        <Box>
          {title && <H2>{title}</H2>}
          {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
        </Box>
      )}
      {children}
    </Box>
  );
};

DemoSectionPanel.defaultProps = {
  className: '',
  title: undefined,
  description: undefined
};

export default memo(DemoSectionPanel);
