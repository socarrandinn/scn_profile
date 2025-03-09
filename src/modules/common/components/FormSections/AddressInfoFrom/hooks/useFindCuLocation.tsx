/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import { useQuery } from '@tanstack/react-query';
import { IAddress } from 'modules/common/interfaces';
import { AddressService } from 'modules/common/service';
import { useMemo } from 'react';

type Props = {
  address: Pick<IAddress, 'state' | 'city' | 'address1' | 'address2'>;
};

const useFindCuLocation = ({ address }: Props) => {
  const data = useMemo(() => {
    return {
      // @ts-ignore
      address1: address?.address1?.code,
      // @ts-ignore
      address2: address?.address2?.code,
      // @ts-ignore
      city: address?.city?.code,
      // @ts-ignore
      state: address?.state?.code,
    };
    // @ts-ignore
  }, [address?.address1?.code, address?.address2?.code, address?.city?.code, address?.state?.code]);

  return useQuery({
    queryKey: ['findCuLocation', data],
    // @ts-ignore
    queryFn: () => AddressService.getCuLocation(data),
    // @ts-ignore
    enabled: !!(data?.address1 && data?.address2 && data?.city && data?.state),
  });
};

export default useFindCuLocation;
