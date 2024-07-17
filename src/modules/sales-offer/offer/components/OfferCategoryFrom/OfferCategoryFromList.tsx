import { Divider, List } from '@mui/material';
import { memo } from 'react';
import OfferCategoryFromItem from './OfferCategoryFromItem';
import { isEmpty } from 'lodash';
import { OfferEmptyItem } from '../OfferEmptyItem';

type OfferCategoryFromProps = {
  fields: any;
  removeRule: any;
  categorySection: boolean;
};

const OfferCategoryFrom = ({ fields, removeRule, categorySection }: OfferCategoryFromProps) => {
  if (isEmpty(fields)) return <OfferEmptyItem />;

  return (
    <List sx={{ width: '100%' }}>
      {fields?.map((ruleCategory: any, index: number) => (
        <>
          <OfferCategoryFromItem
            key={ruleCategory?.id}
            removeRule={removeRule}
            index={index}
            ruleCategory={ruleCategory}
            categorySection={categorySection}
          />
          <Divider variant='inset' component='li' />
        </>
      ))}
    </List>
  );
};

export default memo(OfferCategoryFrom);
