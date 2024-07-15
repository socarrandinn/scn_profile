import { TableCell } from '@mui/material';
import { memo } from 'react';
import PriceCell from '../TableCells/PriceCell';

type AuditLogEventCustomCaseObjectProps = {
  _key: string;
  value: any;
};

const AuditLogEventCustomCaseObject = ({ _key, value }: AuditLogEventCustomCaseObjectProps) => {
  switch (_key) {
    case 'priceDetails.distribution.otherCost':
    case 'priceDetails.distribution.cost':
    case 'priceDetails.distribution.platform':
    case 'priceDetails.distribution.offer':
    case 'priceDetails.distribution.commercial':
    case 'priceDetails.distribution.shipping':
    case 'priceDetails.distribution.logistic':
      return (
        <TableCell>
          <PriceCell value={value} />
        </TableCell>
      );

    default:
      return <TableCell>{<pre> {JSON.stringify(value, null, 2)} </pre>}</TableCell>;
  }
};

export default memo(AuditLogEventCustomCaseObject);
