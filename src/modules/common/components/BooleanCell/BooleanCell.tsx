import { ConditionContainer } from '@dfl/mui-react-common';
import { CheckCircle, Cancel } from '@mui/icons-material';
import { memo } from 'react';

type BooleanCellProps = {
  value: boolean | undefined;
  className?: string;
};

const BooleanCell = ({ value, className }: BooleanCellProps) => {
  return (
    <ConditionContainer active={value === true} alternative={<Cancel className={className} color={'error'} />}>
      <CheckCircle className={className} color={'success'} />
    </ConditionContainer>
  );
};

export default memo(BooleanCell);
