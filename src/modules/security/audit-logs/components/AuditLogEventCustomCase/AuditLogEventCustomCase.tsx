import { TableCell } from '@mui/material';
import AvatarView from 'components/libs/avatar/AvatarView';
import LogisticNameCell from 'modules/inventory/provider/logistics/components/LogisticNameCell/LogisticNameCell';
import ManufactureContainerCell from 'modules/inventory/provider/manufacture/components/ManufactureCell/ManufactureContainerCell';
import SupplierContainerCell from 'modules/inventory/provider/supplier/components/SupplierCell/SupplierContainerCell';
import CategoryContainerCell from 'modules/inventory/settings/category/components/CategoryContainerCell/CategoryContainerCell';
import { memo } from 'react';
import ColorViewCell from '../TableCells/ColorViewCell';

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
    case 'parent':
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
    case 'logistic':
      return (
        <TableCell>
          <LogisticNameCell providerId={value} />
        </TableCell>
      );

    case 'color':
      return (
        <TableCell>
          <ColorViewCell color={value} />
        </TableCell>
      );

    default:
      return (
        <TableCell>
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </TableCell>
      );
  }
};

export default memo(AuditLogEventCustomCase);
