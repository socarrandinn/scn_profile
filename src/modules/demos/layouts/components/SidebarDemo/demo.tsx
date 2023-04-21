import { memo } from 'react';
import SidebarMockup from 'modules/demos/layouts/components/SidebarMockup';

const Demo = () => {
  return (
      <SidebarMockup onClose={() => {}} open={true} />
  );
};

export default memo(Demo);
