import { memo } from 'react';
import EmployeeGender from 'modules/rrhh/analytic/components/GeneralSummary/EmployeeGender';
import { useFindSummary } from 'modules/rrhh/analytic/hooks/useFindSummary';

const GeneralSummary = () => {
  const { isLoading, data } = useFindSummary()
  return (
        <>
            <EmployeeGender isLoading={isLoading} value={data}/>
        </>
  );
};

export default memo(GeneralSummary);
