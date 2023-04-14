import { Address } from 'interfaces/address';
import { FlexBox } from '@dfl/mui-react-common';
import { findProvinceByStateCode, ILocationProvince } from '@dfl/location';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';

export const ProvinceValue = ({ value }: { value: Address }) => {
  if (!value?.state) {
    return (
      <FlexBox alignItems={'center'}>
        <em className='w-full'>-</em>
      </FlexBox>
    );
  }

  const location: ILocationProvince | undefined = findProvinceByStateCode(value.state);

  return (
    <FlexBox alignItems={'center'}>
      {location && <PlaceOutlined fontSize={'small'} />}
      <em className='w-full'>{location?.name}</em>
    </FlexBox>
  );
};
