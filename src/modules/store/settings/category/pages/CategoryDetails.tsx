import React, { memo } from 'react';
import { CenterPageLayout } from 'layouts/index';
import CategoryDetailContainer from '../containers/CategoryDetailContainer';
import { ContentProgressBar } from 'components/ContentProgressBar';

const CategoryDetails = () => {
  return (
    <CenterPageLayout>
      <CategoryDetailContainer />
      <ContentProgressBar title={'List Age Distribution'} data={[{
        value: 62,
        label: 'COLL'
      },
      {
        value: 98,
        label: 'COALL'
      },
      {
        value: 6,
        label: 'aa'
      },
      {
        value: 25,
        label: 'aaaa'
      },
      {
        value: 32,
        label: 'AA'
      }]} />
    </CenterPageLayout>
  );
};

export default memo(CategoryDetails);
