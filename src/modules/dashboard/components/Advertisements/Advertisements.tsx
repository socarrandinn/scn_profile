import { memo } from 'react';
import { useFindAllAdvertisements } from 'modules/dashboard/hooks/useFindAllAdvertisements';
import { IAdvertisements } from 'modules/dashboard/interfaces';
import AdvertisingBox from 'modules/dashboard/components/Advertisements/AdvertisingBox';
import AdvertisingSkeleton from 'modules/dashboard/components/Advertisements/AdvertisingSkeleton';

const mockData = Array.from(Array(3).keys());
const Advertisements = () => {
  const { data, isLoading } = useFindAllAdvertisements();

  if (isLoading) {
    return (
      <>
        {mockData?.map((_: number, i: number) => (
          <AdvertisingSkeleton key={`skeleton-${i}`} />
        ))}
      </>
    );
  }

  return (
    <>
      {data?.data?.map((item: IAdvertisements, idx: number) => (
        <AdvertisingBox item={item} key={item?._id || idx} />
      ))}
    </>
  );
};

export default memo(Advertisements);
