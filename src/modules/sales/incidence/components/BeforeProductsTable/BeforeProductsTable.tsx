/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo } from 'react';
import { BasicTable } from '@dfl/mui-admin-layout';
import { incidenceBeforeColumns } from 'modules/sales/incidence/constants/incidence-replacements.columns';

type Props = {
  products?: any[];
};

const BeforeProductsTable = ({ products = [] }: Props) => {
  return <BasicTable columns={incidenceBeforeColumns} data={products} isLoading={false} error={null} />;
};

export default memo(BeforeProductsTable);
