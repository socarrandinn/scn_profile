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
import { ContactList } from 'modules/common/components/ContactList';
import { IGatewayConfig } from 'modules/sales/settings/payment-settings/interfaces';
import GatewayConfigView from '../TableCells/GatewayConfigView';

type AuditLogEventCustomCaseByArrayProps = {
  _key: string;
  value: any;
};

const AuditLogEventCustomCaseByArray = ({ _key, value }: AuditLogEventCustomCaseByArrayProps) => {
  switch (_key) {
    case 'deliveryRules.regions':
    case 'shippingSettings.deliveryRules.regions':
      return (
        <TableCell>
          <RegionListCell regions={value} />
        </TableCell>
      );
    case 'keywords':
    case 'brand':
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
    case 'tags.product':
    case 'features':
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
    case 'contacts.emails':
    case 'contacts.phones':
      return (
        <TableCell>
          <ContactList contacts={value} />
        </TableCell>
      );
    case 'settings.gatewayConfig':
      return (
        <TableCell>
          <GatewayConfigView data={value as IGatewayConfig[]} />
        </TableCell>
      );
    default:
      return <TableCell>{<pre> {JSON.stringify(value, null, 2)} </pre>}</TableCell>;
  }
};

export default memo(AuditLogEventCustomCaseByArray);
