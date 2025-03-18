import { Divider, List } from '@mui/material';
import { memo } from 'react';
import OfferCategoryFromItem from './OfferCategoryFromItem';
import { isEmpty } from 'lodash';
import { OfferEmptyItem } from '../OfferEmptyItem';

type OfferCategoryFromProps = {
  fields: any;
  removeRule: any;
  section: boolean;
};

const OfferCategoryFrom = ({ fields, removeRule, section }: OfferCategoryFromProps) => {
  if (isEmpty(fields)) return <OfferEmptyItem />;

  return (
    <List sx={{ width: '100%' }}>
      {fields?.map((rule: any, index: number) => (
        <>
          <OfferCategoryFromItem key={rule?.id} removeRule={removeRule} index={index} rule={rule} section={section} />
          <Divider variant='inset' component='li' />
        </>
      ))}
    </List>
  );
};

export default memo(OfferCategoryFrom);
