import { Box } from '@mui/material';
import { memo } from 'react';
import { isEmpty } from 'lodash';
import OfferEmptyItem from '../OfferEmptyItem/OfferEmptyItem';
import { Table } from '@dfl/mui-admin-layout';
import { productItemColumns, removeItemAction } from '../../constants/offer-rules.columns';

type OfferProductFromProps = {
  fields: any;
  removeRule: any;
  section: boolean;
};

const OfferProductFrom = ({ fields, removeRule, section }: OfferProductFromProps) => {
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
        columns={productItemColumns(removeItemAction(removeRule, section))}
        data={fields ?? []}
        hidePagination
        total={fields?.length}
      />
    </Box>
  );
};

export default memo(OfferProductFrom);
