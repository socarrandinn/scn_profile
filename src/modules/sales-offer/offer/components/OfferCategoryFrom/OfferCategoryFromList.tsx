import { memo } from 'react';
import { isEmpty } from 'lodash';
import { OfferEmptyItem } from '../OfferEmptyItem';
import { Table } from '@dfl/mui-admin-layout';
import { removeItemAction, amountCategoryItemColumns } from '../../constants/offer-rules.columns';
import { Box } from '@mui/material';

type OfferCategoryFromProps = {
  fields: any;
  removeRule: any;
  section: boolean;
};

const OfferCategoryFrom = ({ fields, removeRule, section }: OfferCategoryFromProps) => {
  if (isEmpty(fields)) return <OfferEmptyItem />;

  return (
    <Box
      sx={{
        '.MuiTable-root': {
          minWidth: 400,
        },
      }}
    >
      <Table
        columns={amountCategoryItemColumns(removeItemAction(removeRule, section))}
        data={fields ?? []}
        hidePagination
        total={fields?.length}
      />
    </Box>
  );
};

export default memo(OfferCategoryFrom);
