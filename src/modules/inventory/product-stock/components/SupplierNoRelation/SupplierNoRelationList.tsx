import { memo } from 'react';
import { SupplierNoRelationProps } from './SupplierNoRelation';
import { Stack } from '@mui/material';
import SupplierNoRelationEmpty from './SupplierNoRelationEmpty';
import SupplierNoRelationItem from './SupplierNoRelationItem';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

type SupplierNoRelationListProps = Omit<SupplierNoRelationProps, 'onInitialClose' > & {
  handleOpen: (supplier: ISupplier, warehouse: IWarehouse) => void;
};

const SupplierNoRelationList = ({ items, handleOpen }: SupplierNoRelationListProps) => {
  if (items?.length === 0) return <SupplierNoRelationEmpty />;

  return (
    <Stack gap={1}>
      {items?.map((item) => (
        <SupplierNoRelationItem
          key={item?.supplier?._id}
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
