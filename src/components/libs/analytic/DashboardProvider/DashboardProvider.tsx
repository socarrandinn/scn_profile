import { memo, ReactNode } from 'react'
import { TableProvider, Filter } from '@dfl/mui-admin-layout';

type DashboardProviderProps = {
  id: string
  filters?: Filter[],
  children: ReactNode | undefined;
}

const DashboardProvider = (props: DashboardProviderProps) => {
  return (
        <TableProvider {...props}/>
  );
}

export default memo(DashboardProvider);
