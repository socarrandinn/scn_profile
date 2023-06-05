import { memo } from 'react';
import { useFindCategoryDistribution } from 'modules/rrhh/analytic/hooks/useFindCategoryDistribution';
import { BarChart } from 'components/libs/analytic/BarChart';

const CategoryDistribution = () => {
  const { isLoading, data } = useFindCategoryDistribution()
  return (
        <>
            <BarChart name={'category'} data={data} isLoading={isLoading} labelField={'name'} valueField={'count'}/>
        </>
  );
};

export default memo(CategoryDistribution);
