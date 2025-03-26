import { isEmpty } from 'lodash';
import { memo } from 'react';
import { Box } from '@mui/material';
import OfferEmptyItem from '../OfferEmptyItem/OfferEmptyItem';
import { productIncludeColumns, removeItemAction } from '../../constants/offer-rules.columns';
import { Table } from '@dfl/mui-admin-layout';

type OfferProductToIncludeListProps = {
  fields: any;
  removeRule: any;
};

const OfferProductToIncludeList = ({ fields, removeRule }: OfferProductToIncludeListProps) => {
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
        columns={productIncludeColumns(removeItemAction(removeRule, true))}
        data={fields ?? []}
        hidePagination
        total={fields?.length}
      />
    </Box>
  );
};

export default memo(OfferProductToIncludeList);
