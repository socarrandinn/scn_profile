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
      address1: address?.address1?.code?.toString() || address?.address1?.toString(),
      // @ts-ignore
      address2: address?.address2?.code?.toString() || address?.address2?.toString(),
      // @ts-ignore
      city: address?.city?.code?.toString() || address?.city?.toString(),
      // @ts-ignore
      state: address?.state?.code?.toString() || address?.state?.toString(),
    };
    // @ts-ignore
  }, [address?.address1, address?.address2, address?.city, address?.state]);

  return useQuery({
    queryKey: ['findCuLocation', data],
    // @ts-ignore
    queryFn: () => AddressService.getCuLocation(data),
    // @ts-ignore
    enabled: !!(data?.address1 && data?.address2 && data?.city && data?.state),
  });
};

export default useFindCuLocation;
