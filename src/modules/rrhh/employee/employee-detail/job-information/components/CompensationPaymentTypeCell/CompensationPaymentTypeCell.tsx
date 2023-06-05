import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CompensationType, PaymentType } from 'modules/rrhh/employee/management/constants/compensation';

type CompensationPaymentTypCellProps = {
  type?: PaymentType | CompensationType;
};

const CompensationPaymentTypeCell = ({ type }: CompensationPaymentTypCellProps) => {
  const { t } = useTranslation('employee');
  const color = type === PaymentType.ON_DEMAND ? 'success' : 'primary';

  return (
        <Chip
            color={color} variant="outlined"
            size={'small'}
            label={type ? t(`fields.compensation.${type}`) : ''}/>
  );
};

export default memo(CompensationPaymentTypeCell);
