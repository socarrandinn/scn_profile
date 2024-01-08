import { memo } from 'react';
type LogisticsPageDefaultProps = {
  tab: string;
};

const LogisticsPageDefault = ({ tab }: LogisticsPageDefaultProps) => {
  return <div>TABS {tab}</div>;
};

export default memo(LogisticsPageDefault);
