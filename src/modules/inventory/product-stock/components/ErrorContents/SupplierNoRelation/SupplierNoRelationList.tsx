import { memo } from 'react';
import { SupplierNoRelationProps } from './SupplierNoRelation';
import { Stack } from '@mui/material';
import SupplierNoRelationEmpty from './SupplierNoRelationEmpty';
import SupplierNoRelationItem from './SupplierNoRelationItem';
import { ISupplierSummary } from 'modules/inventory/provider/supplier/interfaces';
import { IWarehouseSummary } from 'modules/inventory/warehouse/interfaces';
import { useSupplierRelationContext } from './hooks/useSupplierNotRelationContext';

type SupplierNoRelationListProps = Omit<SupplierNoRelationProps, 'onInitialClose'> & {
  handleOpen: (supplier: ISupplierSummary, warehouse: IWarehouseSummary) => void;
};

const SupplierNoRelationList = ({ items, handleOpen }: SupplierNoRelationListProps) => {
  const relationList = useSupplierRelationContext((state) => state.relationList);

  if (relationList?.length === 0) return <SupplierNoRelationEmpty />;

  return (
    <Stack gap={1}>
      {relationList?.map((item) => (
        <SupplierNoRelationItem
          key={item?.supplier?.supplierId ?? item?.supplier}
          item={item}
          onOpen={() => {
            handleOpen(item?.supplier, item?.warehouse);
          }}
        />
      ))}
    </Stack>
  );
};

export default memo(SupplierNoRelationList);
