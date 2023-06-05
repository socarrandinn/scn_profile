import { memo } from 'react';
import { IAdvertisement } from 'modules/rrhh/advertisement/interfaces';
import AdvertisingBox from 'modules/rrhh/advertisement/components/AdvertisementCardList/AdvertisingBox';
import AdvertisingSkeleton from 'modules/rrhh/advertisement/components/AdvertisementCardList/AdvertisingSkeleton';
import { useFindAdvertisements } from 'modules/rrhh/advertisement/hooks/useFindAdvertisements';

const mockData = Array.from(Array(3).keys());
const Advertisements = () => {
  const { data, isLoading } = useFindAdvertisements();

  // eslint-disable-next-line no-constant-condition
  if (isLoading || true) { // todo
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
      {data?.data?.map((item: IAdvertisement, idx: number) => (
        <AdvertisingBox item={item} key={item?._id || idx} />
      ))}
    </>
  );
};

export default memo(Advertisements);
