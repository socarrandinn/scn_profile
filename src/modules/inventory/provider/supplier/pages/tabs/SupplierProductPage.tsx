import { memo } from 'react';

type SupplierProductPageProps = {
  tab: string;
};

const SupplierProductPage = ({ tab }: SupplierProductPageProps) => {
  return <>TAB:{tab}</>;
};

export default memo(SupplierProductPage);
