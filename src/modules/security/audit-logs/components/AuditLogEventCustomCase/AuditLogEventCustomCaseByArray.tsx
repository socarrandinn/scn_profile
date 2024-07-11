import { TableCell } from '@mui/material';
import { IImageMedia } from 'modules/common/interfaces';
import { KeywordsDisplay } from 'modules/inventory/common/components/KeywordsDisplay';
import { ProductMediaBox } from 'modules/inventory/product/components/ProductGeneralMedia/ProductGeneralMediaInformation';
import { RegionListCell } from 'modules/inventory/product/components/ProductGeneralShippingInfo/RegionListCell';
import TagsView from 'modules/inventory/settings/tags/components/TagsView/TagsView';
import { memo } from 'react';

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

    default:
      return <TableCell>{<pre> {JSON.stringify(value, null, 2)} </pre>}</TableCell>;
  }
};

export default memo(AuditLogEventCustomCaseByArray);
