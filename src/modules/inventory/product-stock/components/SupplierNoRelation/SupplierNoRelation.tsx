import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { memo } from 'react';
type SupplierNoRelationProps = {
  supplier: ISupplier[];
};

const SupplierNoRelation = ({ supplier }: SupplierNoRelationProps) => {
  return <div>SUPPLIER_NO_RELATION</div>;
};

export default memo(SupplierNoRelation);
