import { Divider, List } from '@mui/material';
import { memo } from 'react';
import { isEmpty } from 'lodash';
import { OfferEmptyItem } from '../OfferEmptyItem';
import OfferTwoForOneFromItem from './OfferTwoForOneFromItem';
import { ITwoForOneOffer } from '../../interfaces';

type Field = ITwoForOneOffer & { id: string };
type OfferTwoForOneFromListProps = {
  fields: Field[];
  removeRule: any;
};

const OfferTwoForOneFromList = ({ fields, removeRule }: OfferTwoForOneFromListProps) => {
  if (isEmpty(fields)) return <OfferEmptyItem />;

  return (
    <List sx={{ width: '100%' }}>
      {fields?.map((rule: any, index: number) => (
        <>
          <OfferTwoForOneFromItem key={rule?.id} removeRule={removeRule} index={index} rule={rule} />
          <Divider variant='inset' component='li' />
        </>
      ))}
    </List>
  );
};

export default memo(OfferTwoForOneFromList);
