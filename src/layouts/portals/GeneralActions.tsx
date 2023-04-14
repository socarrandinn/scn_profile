import { memo } from 'react';
import { Portal } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useGeneralActionPortal } from '../PageLayouts/PagePaperLayout';

const GeneralActions = ({ children }: ChildrenProps) => {
  const render = useGeneralActionPortal();

  if (!render) {
    return <></>;
  }

  return <Portal container={document.getElementById('page-general-actions')}>{children}</Portal>;
};

export default memo(GeneralActions);
