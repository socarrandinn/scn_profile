import React, { FC, memo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { FormValueProvider } from '../../context/FormValueProvider';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';

type Props = ChildrenProps & {
  className?: string;
  title?: string;
  description?: string;
  linkId?: string;
};

const FormDemoSectionPanel: FC<Props> = ({ className, title, description, linkId, children }) => {
  return (
    <FormValueProvider>
      <DemoSectionPanel className={className} title={title} description={description} linkId={linkId}>
        {children}
      </DemoSectionPanel>
    </FormValueProvider>
  );
};

FormDemoSectionPanel.defaultProps = {
  className: '',
  title: undefined,
  description: undefined,
};

export default memo(FormDemoSectionPanel);
