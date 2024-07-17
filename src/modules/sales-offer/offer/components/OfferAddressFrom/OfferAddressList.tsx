import { isEmpty } from 'lodash';
import { memo } from 'react';
import { List, Divider, Stack } from '@mui/material';
import OfferAddressFromItem from './OfferAddressFromItem';
import OfferEmptyItem from '../OfferEmptyItem/OfferEmptyItem';

type OfferAddressListProps = {
  fields: any;
  removeRule: any;
  addressSection: boolean;
};

const OfferAddressList = ({ addressSection, fields, removeRule }: OfferAddressListProps) => {
  if (isEmpty(fields)) return <OfferEmptyItem />;

  return (
    <List sx={{ width: '100%' }}>
      {fields?.map((ruleAddress: any, index: number) => (
        <Stack key={ruleAddress?.id}>
          <OfferAddressFromItem
            removeRule={removeRule}
            index={index}
            ruleAddress={ruleAddress}
            addressSection={addressSection}
          />
          <Divider />
        </Stack>
      ))}
    </List>
  );
};

export default memo(OfferAddressList);
