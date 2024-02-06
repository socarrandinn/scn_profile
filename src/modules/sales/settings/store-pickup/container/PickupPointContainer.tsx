import { FormPaper } from 'modules/common/components/FormPaper';
import { memo } from 'react';
import { useFindStorePickup } from '../hooks/useFindStorePickup';

const PickupPointContainer = () => {
  const { data } = useFindStorePickup();

  console.log(data);
  return <FormPaper nm title='Recogida en el punto'></FormPaper>;
};

export default memo(PickupPointContainer);
