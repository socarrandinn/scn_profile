import { CurrencyValue } from '@dfl/mui-react-common';
import { IDelivery } from 'modules/sales/settings/common/interfaces';

type Props = {
  data: IDelivery;
  type: 'normal' | 'express';
};

const CostCell = ({ data, type }: Props) => {
  if (type === 'express') {
    if (!data.hasExpress) return <>-</>;
    return <CurrencyValue value={data?.expressPrice || 0} currency='$' />;
  }

  return (
    <CurrencyValue value={data?.price} currency='$' />
  );
};

export default CostCell;
