import { memo } from 'react';
type Props = {
  name: string;
};

const OfferTwoForOne = ({ name }: Props) => {
  return <div>{name}</div>;
};

export default memo(OfferTwoForOne);
