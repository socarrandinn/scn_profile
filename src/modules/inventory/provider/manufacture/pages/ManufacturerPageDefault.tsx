import { memo } from 'react';
type ManufacturerPageDefaultProps = {
  tab: string;
};

const ManufacturerPageDefault = ({ tab }: ManufacturerPageDefaultProps) => {
  return <div>TABS {tab}</div>;
};

export default memo(ManufacturerPageDefault);
