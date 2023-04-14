import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { ChildrenProps } from '@dfl/mui-react-common';
import { AdminMain } from '@dfl/mui-admin-layout';
import Sidebar from 'layouts/Sidebar/Sidebar';
import Navbar from 'layouts/Navbar/Navbar';

const MainLayout = ({ children }: ChildrenProps) => {
  const { isOpen, onOpen, onClose } = useToggle(false);

  return (
    <div>
      <AdminMain>{children}</AdminMain>
      <Sidebar onClose={onClose} open={isOpen} />
      <Navbar onOpenSidebar={onOpen} />
    </div>
  );
};

export default memo(MainLayout);
