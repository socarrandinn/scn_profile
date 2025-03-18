import { Divider, List } from '@mui/material';
import { memo } from 'react';
import OfferProductFromItem from './OfferProductFromItem';
import { isEmpty } from 'lodash';
import OfferEmptyItem from '../OfferEmptyItem/OfferEmptyItem';

type OfferProductFromProps = {
  fields: any;
  removeRule: any;
  section: boolean;
};

const OfferProductFrom = ({ fields, removeRule, section }: OfferProductFromProps) => {
  if (isEmpty(fields)) return <OfferEmptyItem />;

  return (
    <List sx={{ width: '100%' }}>
      {fields?.map((ruleProduct: any, index: number) => (
        <>
          <OfferProductFromItem
            key={ruleProduct?.id}
            removeRule={removeRule}
            index={index}
            ruleProduct={ruleProduct}
            section={section}
          />
          <Divider variant='inset' component='li' />
        </>
      ))}
    </List>
  );
};

export default memo(OfferProductFrom);
