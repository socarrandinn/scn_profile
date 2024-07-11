import { TableCell } from '@mui/material';
import AvatarView from 'components/libs/avatar/AvatarView';
import ManufactureContainerCell from 'modules/inventory/provider/manufacture/components/ManufactureCell/ManufactureContainerCell';
import SupplierContainerCell from 'modules/inventory/provider/supplier/components/SupplierCell/SupplierContainerCell';
import CategoryContainerCell from 'modules/inventory/settings/category/components/CategoryContainerCell/CategoryContainerCell';
import { memo } from 'react';

type AuditLogEventCustomCaseProps = {
  _key: string;
  value: any;
};

const AuditLogEventCustomCase = ({ _key, value }: AuditLogEventCustomCaseProps) => {
  switch (_key) {
    case 'providers.supplier':
    case 'supplier':
      return (
        <TableCell>
          <SupplierContainerCell providerId={value} />
        </TableCell>
      );
    case 'providers.manufacturer':
    case 'manufacturer':
      return (
        <TableCell>
          <ManufactureContainerCell providerId={value} />
        </TableCell>
      );
    case 'category':
      return (
        <TableCell>
          <CategoryContainerCell categoryId={value} />
        </TableCell>
      );
    case 'avatar.thumb':
    case 'avatar.url':
    case 'image.thumb':
      return (
        <TableCell>
          <AvatarView thumb={value} />
        </TableCell>
      );
    case 'priceDetails.distribution.platform':
    case 'priceDetails.distribution.offer':
      return (
        <TableCell>
         ENTRE
        </TableCell>
      );

    default:
      return <TableCell>{value}</TableCell>;
  }
};

export default memo(AuditLogEventCustomCase);
