import { memo } from 'react';
import SupplierGeneralContainer from '../../containers/SupplierGeneralContainer';

type SupplierGeneralPageProps = {
  tab: string;
};

const SupplierGeneralPage = ({ tab }: SupplierGeneralPageProps) => {
  return <SupplierGeneralContainer />;
};

export default memo(SupplierGeneralPage);
