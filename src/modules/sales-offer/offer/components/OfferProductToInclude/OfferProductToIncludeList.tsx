import { isEmpty } from 'lodash';
import { memo } from 'react';
import { List, Divider } from '@mui/material';
import OfferEmptyItem from '../OfferEmptyItem/OfferEmptyItem';
import OfferProductToIncludeFromItem from './OfferProductToIncludeFromItem';

type OfferProductToIncludeListProps = {
  fields: any;
  removeRule: any;
};

const OfferProductToIncludeList = ({ fields, removeRule }: OfferProductToIncludeListProps) => {
  if (isEmpty(fields)) return <OfferEmptyItem />;

  return (
    <List sx={{ width: '100%' }}>
      {fields?.map((productToInclude: any, index: number) => (
        <>
          <OfferProductToIncludeFromItem
            key={productToInclude?.id}
            removeRule={removeRule}
            index={index}
            productToInclude={productToInclude}
          />
          <Divider />
        </>
      ))}
    </List>
  );
};

export default memo(OfferProductToIncludeList);
