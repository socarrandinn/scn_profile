import { TableCell } from '@mui/material';
import { IImageMedia } from 'modules/common/interfaces';
import { KeywordsDisplay } from 'modules/inventory/common/components/KeywordsDisplay';
import { ProductMediaBox } from 'modules/inventory/product/components/ProductGeneralMedia/ProductGeneralMediaInformation';
import { RegionListCell } from 'modules/inventory/product/components/ProductGeneralShippingInfo/RegionListCell';
import TagsView from 'modules/inventory/settings/tags/components/TagsView/TagsView';
import { memo } from 'react';
import StoreLocationsCell from '../TableCells/StoreLocationsCell';
import AdditionalCostCell from '../TableCells/products/AdditionalCostCell';
import WarehouseCostCell from '../TableCells/products/WarehouseCostCell';

type AuditLogEventCustomCaseByArrayProps = {
  _key: string;
  value: any;
};

const AuditLogEventCustomCaseByArray = ({ _key, value }: AuditLogEventCustomCaseByArrayProps) => {
  console.log(_key, value);
  switch (_key) {
    case 'deliveryRules.regions':
    case 'shippingSettings.deliveryRules.regions':
      return (
        <TableCell>
          <RegionListCell regions={value} />
        </TableCell>
      );
    case 'keywords':
      return (
        <TableCell>
          <KeywordsDisplay words={value || []} />
        </TableCell>
      );
    case 'media':
      return (
        <TableCell>
          <ProductMediaBox pictures={value as IImageMedia[]} height='80px' width='80px' />
        </TableCell>
      );
    case 'tags':
      return (
        <TableCell>
          <TagsView tags={value} />
        </TableCell>
      );

    case 'locations':
      return (
        <TableCell>
          <StoreLocationsCell locations={value} />
        </TableCell>
      );

    case 'priceDetails.distribution.otherCost':
      return (
        <TableCell>
          <AdditionalCostCell otherCost={value} />
        </TableCell>
      );
    case 'priceDetails.distribution.warehouses':
      return (
        <TableCell>
          <WarehouseCostCell otherCost={value} />
        </TableCell>
      );

    default:
      return <TableCell>{<pre> {JSON.stringify(value, null, 2)} </pre>}</TableCell>;
  }
};

export default memo(AuditLogEventCustomCaseByArray);
